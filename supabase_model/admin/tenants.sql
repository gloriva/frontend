-- supabase_model/000_tenants_init.sql
-- Tenants 멀티테넌시 기본 셋업 (유니크, RLS, 랜덤 슬러그 RPC, 가용성 체크 RPC)

-- 0) 준비: 확장
create extension if not exists pgcrypto;

-- 1) 전역 유니크(대소문자 무시)
create unique index if not exists tenants_slug_unique_idx
  on public.tenants (lower(slug));

-- 2) RLS
alter table public.tenants enable row level security;

-- 조회: 소유자만
drop policy if exists tenants_select_own on public.tenants;
create policy tenants_select_own
  on public.tenants
  for select
  using (owner_user_id = auth.uid());

-- 생성: 소유자(본인 uid)로만 insert 허용
drop policy if exists tenants_insert_own on public.tenants;
create policy tenants_insert_own
  on public.tenants
  for insert
  with check (owner_user_id = auth.uid());

-- (선택) 수정/삭제 정책이 필요하면 아래 주석 해제
-- drop policy if exists tenants_update_own on public.tenants;
-- create policy tenants_update_own
--   on public.tenants
--   for update
--   using (owner_user_id = auth.uid())
--   with check (owner_user_id = auth.uid());
--
-- drop policy if exists tenants_delete_own on public.tenants;
-- create policy tenants_delete_own
--   on public.tenants
--   for delete
--   using (owner_user_id = auth.uid());

-- 3) 랜덤 슬러그 추천 RPC
create or replace function public.generate_tenant_slug(base text default null)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate text;
  n int := 0;
begin
  -- base(교회명 등) → slug 정규화
  if base is not null and length(trim(base)) > 0 then
    candidate := lower(regexp_replace(trim(base), '[^a-z0-9-]', '-', 'g'));
    candidate := regexp_replace(candidate, '-{2,}', '-', 'g');
    candidate := regexp_replace(candidate, '(^-|-$)', '', 'g');
    candidate := left(candidate, 32);
  end if;

  if candidate is null or candidate = '' then
    candidate := 'gloriva';
  end if;

  -- 예약어 회피(필요시 추가)
  if candidate in ('admin','api','auth','login','logout','signup',
                   'dashboard','www','static','assets','_next','v1','v2','app') then
    candidate := 'gloriva';
  end if;

  -- 충돌 시 숫자/짧은 해시 부여하여 고유화
  while exists(select 1 from public.tenants t where lower(t.slug) = lower(candidate)) loop
    n := n + 1;
    candidate := left(candidate, greatest(1, 28)) || '-' || to_hex((random()*4294967295)::int);
    candidate := left(candidate, 32);
    if n > 8 then
      -- 최악의 경우 완전 랜덤
      candidate := to_hex(gen_random_bytes(6));
    end if;
  end loop;

  return candidate;
end
$$;

-- 4) 슬러그 가용성 체크 RPC (선택: 실시간 "사용 가능" 표시 용)
create or replace function public.is_slug_available(s text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select not exists (
    select 1
    from public.tenants t
    where lower(t.slug) = lower(s)
  );
$$;

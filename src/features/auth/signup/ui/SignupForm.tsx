import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { icon } from "@/shared/assets";
import { isEmail, minLen } from "@/shared/lib/authValidators";
import { normalizeEmail } from "@/shared/lib/normalizeEmail";
import { normalizeSlug, isValidSlug } from "@/shared/lib/normalizeSlug";
import { theme } from "@/features/auth/login/ui/theme";
import { useSignup } from "@/features/auth/signup/model/useSignup";
import { supabase } from "@/shared/config/supabase";

type SlugStatus = "idle" | "checking" | "ok" | "taken" | "invalid";

function clientRandomSlug(len = 9) {
  // 영문/숫자만으로 9자 생성 
  const s = Math.random()
    .toString(36)
    .slice(2, 2 + len)
    .replace(/[^a-z0-9]/g, "a");
  const mid = Math.floor(len / 2);
  const withHyphen = (s.slice(0, mid) + "-" + s.slice(mid)).slice(0, len + 1); // 10자가 될 수도
  return normalizeSlug(withHyphen);
}

export const SignupForm: React.FC = () => {
  const [churchName, setChurchName] = useState("");

  const [slugInput, setSlugInput] = useState("");
  const [slugStatus, setSlugStatus] = useState<SlugStatus>("idle");
  const [slugLoading, setSlugLoading] = useState(true);
  const [slugError, setSlugError] = useState<string | null>(null);


  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const { signUp, loading, error } = useSignup();

  // 0) 최초 마운트: 로컬 폴백으로 즉시 보여주고, RPC 성공 시 교체
  useEffect(() => {
    // 폴백 먼저 채움 → 사용자는 즉시 “미리 입력된 값”을 보게 됨
    const fallback = clientRandomSlug(9);
    setSlugInput(fallback);

    (async () => {
      try {
        const { data, error } = await supabase.rpc("generate_tenant_slug", {
          base: null,
          desired_len: 9,
        });
        if (error) {
          console.error("[RPC generate_tenant_slug] error:", error);
          setSlugError(error.message);
        } else if (data) {
          // 서버가 준 유니크 값으로 덮어쓰기
          setSlugInput(String(data));
        } else {
          console.warn("[RPC generate_tenant_slug] no data; keep fallback");
        }
      } catch (e: any) {
        console.error("[RPC generate_tenant_slug] exception:", e);
        setSlugError(e?.message ?? "slug 생성 중 오류");
      } finally {
        setSlugLoading(false);
      }
    })();
  }, []);

  // 1) 슬러그 유효성 + 중복 체크 (raw 입력을 normalize 해서 검사/쿼리)
  useEffect(() => {
    const s = normalizeSlug(slugInput);

    if (!s) {
      setSlugStatus("idle");
      return;
    }
    if (!isValidSlug(s)) {
      setSlugStatus("invalid");
      return;
    }

    setSlugStatus("checking");
    const t = setTimeout(async () => {
      try {
        const { count, error } = await supabase
          .from("tenants")
          .select("id", { count: "exact", head: true })
          .ilike("slug", s); // lower(slug) unique 와 호환

        if (error) {
          console.error("[slug availability] select error:", error);
          setSlugStatus("invalid");
        } else {
          setSlugStatus(count === 0 ? "ok" : "taken");
        }
      } catch (e) {
        console.error("[slug availability] exception:", e);
        setSlugStatus("invalid");
      }
    }, 300);

    return () => clearTimeout(t);
  }, [slugInput]);

  // 2) 클라이언트트 유효성
  const errors = useMemo(() => {
    const e: Record<string, string | undefined> = {};
    if (!churchName.trim()) e.name = "교회 이름을 입력해주세요.";
    if (email && !isEmail(email))
      e.email = "올바른 이메일 형식을 입력해주세요.";
    if (pw && !minLen(pw, 6)) e.pw = "비밀번호를 입력하세요 (최소 6자)";
    if (pw2 && pw2 !== pw) e.pw2 = "비밀번호가 일치하지 않습니다.";
    if (slugStatus === "invalid")
      e.slug = "허용되지 않는 주소 형식(또는 예약어)입니다.";
    if (slugStatus === "taken") e.slug = "이미 사용 중인 주소입니다.";
    return e;
  }, [churchName, email, pw, pw2, slugStatus]);

  const canSubmit =
    churchName.trim().length > 0 &&
    slugStatus === "ok" &&
    isEmail(email) &&
    minLen(pw, 6) &&
    pw === pw2 &&
    !loading;

  // 3) 제출
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      const cleanEmail = normalizeEmail(email);
      const finalSlug = normalizeSlug(slugInput); // 최종 정규화
      const finalName = churchName.trim();

      await signUp({ email: cleanEmail, password: pw, churchName: finalName });

      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes?.user;
      if (!user) {
        alert("로그인 세션이 없습니다. 이메일 확인 후 다시 시도해주세요.");
        return;
      }

      const { error: insertErr } = await supabase
        .from("tenants")
        .insert({ name: finalName, slug: finalSlug, owner_user_id: user.id });

      if (insertErr) {
        alert(
          insertErr.message.includes("duplicate")
            ? "해당 주소가 막 등록되었습니다. 다른 주소를 선택해 주세요."
            : insertErr.message,
        );
        return;
      }

      window.location.href = `/${finalSlug}/dashboard`;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {/* 교회 이름 */}
      <div className="relative flex items-center rounded-xl border border-gray-200 bg-white shadow-sm">
        <span className="pointer-events-none pl-3 text-gray-400">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M4 21V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16"
              strokeWidth={1.5}
            />
            <path d="M9 21v-6h6v6" strokeWidth={1.5} />
          </svg>
        </span>
        <input
          className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-2"
          placeholder="예: 선진 교회"
          value={churchName}
          onChange={(e) => setChurchName(e.target.value)}
          autoComplete="organization"
        />
      </div>
      {errors.name && (
        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
      )}

      {/* 교회 주소 (slug) */}
      <div className="w-full">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          내 교회 주소
        </label>
        <div
          className={cn(
            "relative flex items-center rounded-xl border bg-white shadow-sm",
            slugStatus === "ok" && "border-green-300",
            slugStatus === "taken" && "border-red-300",
            slugStatus === "invalid" && "border-amber-300",
            (slugStatus === "idle" || slugStatus === "checking") &&
              "border-gray-200",
          )}
        >
          <span className="pl-3 pr-1 text-gray-400 text-sm select-none">
            localhost:3000/
          </span>

          <input
            className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-1"
            value={slugInput}
            onChange={(e) => setSlugInput(e.target.value)}
            placeholder={slugLoading ? "주소 생성 중…" : "my-church"}
            type="text"
            autoComplete="off"
            aria-invalid={slugStatus === "invalid" || slugStatus === "taken"}
          />

          <span
            className={cn(
              "absolute right-3 text-xs",
              slugStatus === "ok" && "text-green-600",
              slugStatus === "taken" && "text-red-600",
              slugStatus === "invalid" && "text-amber-600",
              slugStatus === "checking" && "text-gray-400",
            )}
          >
            {slugStatus === "ok" && "사용 가능"}
            {slugStatus === "taken" && "이미 사용 중"}
            {slugStatus === "invalid" && "형식 확인"}
            {slugStatus === "checking" && "확인 중…"}
            {slugLoading && slugStatus === "idle" && "생성 중…"}
          </span>
        </div>
        {slugError && (
          <p className="mt-2 text-xs text-amber-600">
            임시 주소가 적용되었습니다. ({slugError})
          </p>
        )}
        {errors.slug && (
          <p className="mt-2 text-sm text-red-500">{errors.slug}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          영문 소문자/숫자/하이픈(-), 3~9자. 예: <code>hope-7</code>
        </p>
      </div>

      {/* 이메일 */}
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-center rounded-xl border bg-white shadow-sm",
            errors.email ? "border-red-300" : "border-gray-200",
          )}
        >
          <span className="pointer-events-none pl-3 text-gray-400">
            <img src={icon.mailIcon} alt="" className="h-5 w-5" aria-hidden />
          </span>
          <input
            className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-2"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            autoComplete="email"
            inputMode="email"
            type="email"
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* 비밀번호 */}
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-center rounded-xl border bg-white shadow-sm",
            errors.pw ? "border-red-300" : "border-gray-200",
          )}
        >
          <span className="pointer-events-none pl-3 text-gray-400">
            <img src={icon.lockIcon} alt="" className="h-5 w-5" aria-hidden />
          </span>
          <input
            className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-2 pr-10"
            placeholder="비밀번호를 입력하세요 (최소 6자)"
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPw((s) => !s)}
            aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 표시"}
          >
            {showPw ? (
              <img
                src={icon.eyeOffIcon}
                alt=""
                className="h-5 w-5"
                aria-hidden
              />
            ) : (
              <img src={icon.eyeIcon} alt="" className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
        {errors.pw && <p className="mt-2 text-sm text-red-500">{errors.pw}</p>}
      </div>

      {/* 비밀번호 확인 */}
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-center rounded-xl border bg-white shadow-sm",
            errors.pw2 ? "border-red-300" : "border-gray-200",
          )}
        >
          <span className="pointer-events-none pl-3 text-gray-400">
            <img src={icon.lockIcon} alt="" className="h-5 w-5" aria-hidden />
          </span>
          <input
            className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-2 pr-10"
            placeholder="비밀번호를 다시 입력하세요"
            type={showPw2 ? "text" : "password"}
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPw2((s) => !s)}
            aria-label={showPw2 ? "비밀번호 숨기기" : "비밀번호 표시"}
          >
            {showPw2 ? (
              <img
                src={icon.eyeOffIcon}
                alt=""
                className="h-5 w-5"
                aria-hidden
              />
            ) : (
              <img src={icon.eyeIcon} alt="" className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
        {errors.pw2 && (
          <p className="mt-2 text-sm text-red-500">{errors.pw2}</p>
        )}
      </div>

      {/* 제출 */}
      <button
        type="submit"
        disabled={!canSubmit}
        className={cn(
          "mt-2 h-12 w-full rounded-xl text-white shadow-lg transition hover:opacity-95 active:scale-[0.99]",
          "bg-gradient-to-r",
          theme.brand.gradient,
          !canSubmit && "opacity-60 cursor-not-allowed",
        )}
      >
        <span className="inline-flex items-center justify-center gap-2 font-semibold">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M4 12h16M12 4v16" />
          </svg>
          {loading ? "처리 중..." : "교회 홈페이지 만들기"}
        </span>
      </button>

      {/* 서버/네트워크 에러 */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
};

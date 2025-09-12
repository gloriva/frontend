import React, { useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { isEmail, hasAt, minLen } from "@/shared/lib/authValidators";
import { icon } from "@/shared/assets";
import { theme } from "@/features/auth/login/ui/theme";
import { supabase } from "@/shared/config/supabase";

const BubbleTip: React.FC<{ value: string }> = ({ value }) => (
  <div className="absolute left-0 top-full mt-2 w-max max-w-[280px] rounded-xl border border-amber-200 bg-white px-3 py-2 text-[13px] leading-5 text-gray-700 shadow-xl">
    <div className="mb-1 flex items-center gap-2 text-amber-600">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-[12px] font-bold">
        !
      </span>
      <span className="font-medium">이메일 주소에 '@'를 포함해 주세요.</span>
    </div>
    <div className="text-gray-500">'{value}'에 '@'가 없습니다.</div>
    <div className="absolute -top-2 left-4 h-4 w-4 rotate-45 border-l border-t border-amber-200 bg-white" />
  </div>
);

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErr, setServerErr] = useState<string | null>(null);

  const emailError = useMemo(() => {
    if (email === "") return undefined;
    return isEmail(email) ? undefined : "올바른 이메일 형식을 입력해주세요.";
  }, [email]);

  const canSubmit = isEmail(email) && minLen(password, 1) && !loading;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setServerErr(null);

    try {
      // 1) 이메일/비번 로그인
      const { data: signInRes, error: signInErr } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInErr) {
        const msg = (signInErr as any)?.message || "로그인에 실패했습니다.";
        const normalized =
          /invalid login credentials/i.test(msg) ? "이메일 또는 비밀번호가 올바르지 않습니다." :
          /email not confirmed/i.test(msg) ? "이메일 인증이 필요합니다. 메일함을 확인해 주세요." :
          msg;
        setServerErr(normalized);
        return;
      }

      // 2) 유저 확인
      const user = signInRes.user;
      if (!user) {
        setServerErr("세션을 생성하지 못했습니다. 다시 시도해주세요.");
        return;
      }

      // 3) 유저가 소유한 테넌트 조회 → /{slug}/dashboard 로 이동
      //    (오너가 여러 명일 수 있으면 가장 최근 생성 1건으로 예시)
      const { data: tenants, error: tErr } = await supabase
        .from("tenants")
        .select("slug")
        .eq("owner_user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1);

      if (tErr) {
        setServerErr(tErr.message || "테넌트 조회 중 오류가 발생했습니다.");
        return;
      }

      if (tenants && tenants.length > 0 && tenants[0].slug) {
        const slug = tenants[0].slug as string;
        window.location.href = `/${slug}/dashboard`;
      } else {
        // 소유 테넌트가 아직 없다면 온보딩/생성 페이지로
        window.location.href = `/onboarding`;
      }
    } catch (e: any) {
      setServerErr(e?.message ?? "로그인 처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="relative">
        <div
          className={cn(
            "relative flex items-center rounded-xl border bg-white shadow-sm",
            emailError ? "border-red-300" : "border-gray-200",
          )}
        >
          <span className="pointer-events-none pl-3 text-gray-400">
            <img src={icon.mailIcon} alt="" className="h-5 w-5" aria-hidden />
          </span>
          <input
            className={cn(
              "h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none",
              "pl-2",
            )}
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            inputMode="email"
            type="email"
          />
        </div>
        {!hasAt(email) && email.length > 0 && <BubbleTip value={email} />}
        {emailError && (
          <p className="mt-2 text-sm text-red-500">{emailError}</p>
        )}
      </div>

      <div>
        <div className="relative flex items-center rounded-xl border border-gray-200 bg-white shadow-sm">
          <span className="pointer-events-none pl-3 text-gray-400">
            <img src={icon.lockIcon} alt="" className="h-5 w-5" aria-hidden />
          </span>
          <input
            className="h-12 w-full rounded-xl bg-transparent px-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none pl-2 pr-10"
            placeholder="비밀번호를 입력하세요"
            type={showPw ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPw((s) => !s)}
            aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 표시"}
          >
            {showPw ? (
              <img src={icon.eyeOffIcon} alt="" className="h-5 w-5" aria-hidden />
            ) : (
              <img src={icon.eyeIcon} alt="" className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* 서버/네트워크 에러 */}
      {serverErr && <p className="text-sm text-red-500">{serverErr}</p>}

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
          {loading ? "처리 중..." : "교회 관리 시작하기"}
        </span>
      </button>
    </form>
  );
};

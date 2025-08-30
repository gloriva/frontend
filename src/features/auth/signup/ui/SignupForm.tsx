import React, { useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { icon } from "@/shared/assets";
import { isEmail, minLen } from "@/shared/lib/authValidators";
import { theme } from "@/features/auth/login/ui/theme";

export const SignupForm: React.FC = () => {
  const [churchName, setChurchName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string | undefined> = {};
    if (email && !isEmail(email))
      e.email = "올바른 이메일 형식을 입력해주세요.";
    if (pw && !minLen(pw, 6)) e.pw = "비밀번호를 입력하세요 (최소 6자)";
    if (pw2 && pw2 !== pw) e.pw2 = "비밀번호가 일치하지 않습니다.";
    return e;
  }, [email, pw, pw2]);

  const canSubmit =
    churchName.trim().length > 0 &&
    isEmail(email) &&
    minLen(pw, 6) &&
    pw === pw2;

  return (
    <div className="space-y-4">
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
          placeholder="예: 사랑의교회, 은혜교회"
          value={churchName}
          onChange={(e) => setChurchName(e.target.value)}
        />
      </div>

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

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
          />
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPw((s) => !s)}
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
          />
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPw2((s) => !s)}
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

      <button
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
          교회 홈페이지 만들기
        </span>
      </button>
    </div>
  );
};

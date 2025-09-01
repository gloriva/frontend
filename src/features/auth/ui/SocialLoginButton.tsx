import React from "react";

export const SocialLoginButtons: React.FC = () => {
  const handleGoogleLogin = () => {
    // Google 로그인 로직
    console.log("Google 로그인");
  };

  const handleKakaoLogin = () => {
    // Kakao 로그인 로직
    console.log("Kakao 로그인");
  };

  return (
    <div className="space-y-3">
      {/* Google 로그인 버튼 */}
      <button
        onClick={handleGoogleLogin}
        className={`flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="font-medium text-gray-700">Google로 계속하기</span>
      </button>

      {/* Kakao 로그인 버튼 */}
      <button
        onClick={handleKakaoLogin}
        className={`flex w-full items-center justify-center gap-3 rounded-lg bg-yellow-400 px-4 py-3 transition-colors hover:bg-yellow-500`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#3C1E1E"
            d="M12 3C7.03 3 3 6.14 3 10.1c0 2.52 1.65 4.73 4.1 6.09l-.95 3.57c-.09.34.23.63.55.47l4.15-2.73c.37.04.75.06 1.15.06 4.97 0 9-3.14 9-7.1S16.97 3 12 3z"
          />
        </svg>
        <span className="font-medium text-gray-900">카카오로 계속하기</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;

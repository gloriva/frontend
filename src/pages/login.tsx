import React, { useState } from "react";
import { SocialLoginBtn } from "@/features/auth";
import LoginForm from "../features/auth/ui/LoginForm";
import SignupForm from "../features/auth/ui/SignupForm";

const Login: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="w-2xl min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gloriva</h2>
          {/* <p className="text-sm text-gray-600">
            {isSignup ? "새 계정을 만들어보세요" : "계정에 로그인하세요"}
          </p> */}
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          {/* 소셜 로그인 버튼 (상단) */}
          <div className="mb-6">
            <SocialLoginBtn />
          </div>

          {/* 구분선 */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 로그인/회원가입 폼 (하단) */}
          <div className="mb-6">
            {isSignup ? <SignupForm /> : <LoginForm />}
          </div>

          {/* 로그인/회원가입 전환 */}
          <div className="text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {isSignup
                ? "이미 계정이 있으신가요? 로그인"
                : "계정이 없으신가요? 회원가입"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

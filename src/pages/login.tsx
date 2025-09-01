import React, { useState } from "react";
import { SocialLoginBtn } from "@/features/auth";
import LoginForm from "../features/auth/ui/LoginForm";
import SignupForm from "../features/auth/ui/SignupForm";
import { ChangeForm } from "@/features/auth";
import { Divider } from "@/shared/ui/divider";

const Login: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  function handleAuthState() {
    setIsSignup((prev) => !prev);
  }

  return (
    <div
      className={`flex min-h-screen w-2xl flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Gloriva</h2>
        </div>
      </div>

      <div className={`mt-8 sm:mx-auto sm:w-full sm:max-w-md`}>
        <div className={`rounded-lg bg-white px-4 py-8 shadow-lg sm:px-10`}>
          {/* 소셜 로그인 버튼 (상단) */}
          <div className="mb-6">
            <SocialLoginBtn />
          </div>
          <Divider />
          <div className="mb-6">
            {isSignup ? <SignupForm /> : <LoginForm />}
          </div>
          <ChangeForm handleAuthState={handleAuthState} isSignup={isSignup} />
        </div>
      </div>
    </div>
  );
};

export default Login;

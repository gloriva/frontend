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
    <div className="w-2xl min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gloriva</h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
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

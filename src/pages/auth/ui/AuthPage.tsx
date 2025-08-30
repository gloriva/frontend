import React, { useState } from "react";
import { ChurchIcon } from "@/shared/assets/images";
import {
  AuthCard,
  BottomDots,
  BottomNote,
} from "@/widgets/auth-card/ui/AuthCard";
import { LoginForm } from "@/features/auth/login/ui/LoginForm";
import { SignupForm } from "@/features/auth/signup/ui/SignupForm";
import { cn } from "@/shared/lib/cn";

export type Tab = "login" | "signup";

export default function AuthPage({ defaultTab = "login" as Tab }) {
  const [tab, setTab] = useState<Tab>(defaultTab);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50/60 to-white">
      <div className="mx-auto w-full max-w-[420px] px-5 py-10">
        <img
          src={ChurchIcon}
          alt="church logo"
          className="mx-auto mb-4 h-12 w-12 rounded-2xl shadow-lg"
        />
        <h1 className="text-center text-[40px] font-extrabold leading-tight text-indigo-700">
          Gloriva
        </h1>
        <p className="mt-2 text-center text-[15px] text-gray-600">
          교회 홈페이지 구축 플랫폼
        </p>
        <p className="mt-1 text-center text-sm text-gray-500">
          간단하고 아름다운 교회 홈페이지를
          <br />
          <span className="font-semibold text-indigo-600">몇 분 만에</span>{" "}
          만들어보세요
        </p>

        {/* Tabs */}
        <div className="mx-auto mt-6 flex w-full max-w-[360px] rounded-full bg-white p-1 shadow-sm ring-1 ring-gray-200">
          <button
            onClick={() => setTab("login")}
            className={cn(
              "flex-1 rounded-full py-2 text-sm font-medium transition",
              tab === "login"
                ? "bg-indigo-600 text-white shadow"
                : "text-gray-600 hover:text-gray-900",
            )}
          >
            로그인
          </button>
          <button
            onClick={() => setTab("signup")}
            className={cn(
              "flex-1 rounded-full py-2 text-sm font-medium transition",
              tab === "signup"
                ? "bg-indigo-600 text-white shadow"
                : "text-gray-600 hover:text-gray-900",
            )}
          >
            회원가입
          </button>
        </div>

        <AuthCard
          title={tab === "login" ? "로그인" : "회원가입"}
          subtitle={
            tab === "login"
              ? "교회 홈페이지 관리를 위해 로그인해주세요"
              : "나만의 교회 홈페이지를 만들어보세요"
          }
        >
          {tab === "login" ? <LoginForm /> : <SignupForm />}
        </AuthCard>

        <BottomDots />
        <BottomNote />
      </div>
    </div>
  );
}

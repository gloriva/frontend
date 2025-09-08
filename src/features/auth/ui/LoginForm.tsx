import React, { useState } from "react";
import { useAuthStore } from "../model/authStore";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        {/* <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          이메일
        </label> */}
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="이메일을 입력하세요"
          required
        />
      </div>

      <div>
        {/* <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          비밀번호
        </label> */}
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className={`focus:ring-opacity-50 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200`}
          />
          <span className="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
        </label>
        <a href="#" className={`text-sm text-blue-600 hover:text-blue-500`}>
          비밀번호 찾기
        </a>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isLoading ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
};

export default LoginForm;

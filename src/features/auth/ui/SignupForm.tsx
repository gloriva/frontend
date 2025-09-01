import React, { useState } from "react";
import { useAuthStore } from "../model/authStore";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signup, isLoading } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password);
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="이름을 입력하세요"
          required
        />
      </div>

      <div>
        <label
          htmlFor="signup-email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          이메일
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="이메일을 입력하세요"
          required
        />
      </div>

      <div>
        <label
          htmlFor="signup-password"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          비밀번호
        </label>
        <input
          id="signup-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>

      <div>
        <label
          htmlFor="confirm-password"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          비밀번호 확인
        </label>
        <input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          placeholder="비밀번호를 다시 입력하세요"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isLoading ? "가입 중..." : "회원가입"}
      </button>
    </form>
  );
};

export default SignupForm;

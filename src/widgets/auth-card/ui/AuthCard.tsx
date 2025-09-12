import React from "react";
import { theme } from "@/features/auth/login/ui/theme";
import { cn } from "@/shared/lib/cn";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div
      className={cn(
        "mt-6 rounded-3xl bg-white p-6",
        theme.cardShadow,
        "ring-1 ring-gray-100",
      )}
    >
      <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-6 text-center text-sm text-gray-500">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export const BottomDots: React.FC = () => (
  <div className="mt-10 flex items-center justify-center gap-2">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className={cn(
          "h-3 w-3 rounded-full",
          i === 0 ? "bg-indigo-500" : "bg-indigo-300/50",
        )}
      />
    ))}
    <button
      aria-label="add"
      className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-white shadow-sm"
    >
      +
    </button>
  </div>
);

export const BottomNote: React.FC = () => (
  <p className="mt-6 text-center text-sm text-gray-500">
    이미 <span className="font-semibold text-indigo-600">n 개의 교회</span>가
    Gloriva와 함께하고 있습니다
  </p>
);

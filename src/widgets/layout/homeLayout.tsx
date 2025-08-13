import type React from "react";

import {
  Church,
  Facebook,
  Instagram,
  Youtube,
  X,
  Menu,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useState } from "react";

const navigation = [
  { name: "홈", href: "/home" },
  { name: "교회소개", href: "/about" },
  { name: "예배안내", href: "/worship" },
  { name: "교육부서", href: "/education" },
  { name: "공지사항", href: "/notice" },
  { name: "갤러리", href: "/gallery" },
  { name: "오시는길", href: "/location" },
];

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const pathname = window.location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="relative">
        {/* Church Image Background */}
        <div
          className="h-32 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/placeholder.svg?height=150&width=400')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Logo */}
          <nav className="relative z-10 flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Church className="h-6 w-6 text-white" />
              <span className="text-white font-semibold">은혜교회</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>

        {/* User Menu Dropdown */}
        <div
          className={`absolute right-4 top-15 z-20 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "transform scale-100 opacity-100 translate-y-0"
              : "transform scale-75 opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{
            transformOrigin: "top right",
          }}
        >
          <div className=" bg-white rounded-lg shadow-lg border p-2">
            <div className="flex flex-col justify-center gap-4">
              {isLogin ? (
                <a
                  href="/logout"
                  className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LogOut className="h-4 w-4 mb-1" />
                  <span className="text-xs">로그아웃</span>
                </a>
              ) : (
                <a
                  href="/login"
                  className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LogIn className="h-4 w-4 mb-1" />
                  <span className="text-xs">로그인</span>
                </a>
              )}

              <a
                href="/mypage"
                className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4 mb-1" />
                <span className="text-xs">마이페이지</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="bg-white border-b shadow-sm">
          <div className="overflow-x-auto">
            <div className="flex min-w-max">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    pathname === item.href
                      ? "border-blue-600 text-blue-600 bg-blue-50"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-6 mt-8">
        <div className="text-center space-y-4">
          {/* SNS Links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>

          {/* Project Info */}
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-medium">은혜교회 홈페이지</p>
            <p>모든 세대가 함께하는 따뜻한 신앙공동체</p>
            <p>하나님의 사랑을 나누고 실천하는 교회</p>
            <p className="text-gray-500 mt-2">
              © 2024 Grace Church. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

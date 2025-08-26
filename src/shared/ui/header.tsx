import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Church, User, LogIn, UserCog, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/shared/constants/headerNavigation";

const userMenuItems = [
  { name: "로그인", href: "/login", icon: User },
  { name: "마이페이지", href: "/mypage", icon: User },
  { name: "관리자 페이지", href: "/admin", icon: UserCog },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className="flex h-16 items-center justify-between">
          {/* 로고 및 교회명 */}
          <Link
            to="/"
            className={`flex items-center space-x-3 transition-opacity hover:opacity-80`}
          >
            <div className="rounded-lg bg-blue-600 p-2">
              <Church className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">은혜교회</h1>
              <p className={`hidden text-xs text-gray-600 sm:block`}>
                Grace Church
              </p>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className={`hidden space-x-8 lg:flex`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-600"
                    : `text-gray-700 hover:bg-gray-50 hover:text-blue-600`
                } `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 햄버거 메뉴 및 사용자 메뉴 */}
          <div className={`hidden items-center space-x-4 md:flex`}>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600`}
              >
                <User className="h-5 w-5" />
                <span>메뉴</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isUserMenuOpen ? "rotate-180" : ""} `}
                />
              </button>

              {/* 드롭다운 메뉴 */}
              {isUserMenuOpen && (
                <div
                  className={`absolute right-0 z-50 w-48 rounded-lg border border-gray-200 bg-white shadow-lg`}
                >
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsUserMenuOpen(false)}
                      className={`flex items-center rounded-lg px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`border-t border-gray-200 lg:hidden`}
            >
              <div className="space-y-2 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-md px-4 py-2 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-600"
                        : `text-gray-700 hover:bg-gray-50 hover:text-blue-600`
                    } `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* 모바일 사용자 메뉴 */}
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <Link
                    to="/login"
                    className={`flex items-center rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="mr-3 h-5 w-5" />
                    로그인
                  </Link>
                  <Link
                    to="/mypage"
                    className={`flex items-center rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="mr-3 h-5 w-5" />
                    마이페이지
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

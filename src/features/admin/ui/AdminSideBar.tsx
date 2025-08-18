import { Settings, LogOut, Home, User2 } from "lucide-react";
import { menuItems } from "@/features/admin/constants/AdminSideBar";
import type { AdminSideBarType } from "@/entities/admin/AdminSideBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminSideBar({
  setActiveTab,
  activeTab,
  handleMenu,
  isOpen,
}: AdminSideBarType) {
  return (
    <div className="sticky bottom-0 min-h-screen w-64 bg-white shadow-lg">
      <div>
        <div className="border-b border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900">관리자 패널</h2>
          <p className="mt-1 text-sm text-gray-600">은혜교회</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                    activeTab === item.id
                      ? "border-r-2 border-blue-700 bg-blue-50 text-blue-700"
                      : `text-gray-700 hover:bg-gray-50`
                  } `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 border-t border-gray-200 p-4">
        <button
          className={`mb-2 flex w-full cursor-pointer items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600`}
          onClick={handleMenu}
        >
          <User2 className="mr-3 h-5 w-5" />
          메뉴
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute right-0 bottom-20 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg"
          >
            <Link
              to="/home"
              className={`mb-2 flex w-full items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600`}
            >
              <Home className="mr-3 h-5 w-5" />
              홈으로 가기
            </Link>
            <button
              className={`flex w-full items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50`}
            >
              <Settings className="mr-3 h-5 w-5" />
              설정
            </button>
            <button
              className={`mt-2 flex w-full items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50`}
            >
              <LogOut className="mr-3 h-5 w-5" />
              로그아웃
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

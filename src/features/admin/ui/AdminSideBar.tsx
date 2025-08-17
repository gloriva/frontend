import { Settings, LogOut, Home, User2 } from "lucide-react";
import { menuItems } from "@/features/admin/constants/menuItem";
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
    <div className="w-64 bg-white shadow-lg sticky bottom-0 min-h-screen">
      <div>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">관리자 패널</h2>
          <p className="text-sm text-gray-600 mt-1">은혜교회</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <button
          className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors mb-2 cursor-pointer"
          onClick={handleMenu}
        >
          <User2 className="h-5 w-5 mr-3" />
          메뉴
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute bottom-20 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          >
            <Link
              to="/home"
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors mb-2"
            >
              <Home className="h-5 w-5 mr-3" />
              홈으로 가기
            </Link>
            <button className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="h-5 w-5 mr-3" />
              설정
            </button>
            <button className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mt-2">
              <LogOut className="h-5 w-5 mr-3" />
              로그아웃
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

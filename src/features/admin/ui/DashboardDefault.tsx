import { FileText, Bell, Newspaper } from "lucide-react";
import DashboardStates from "./DashboardStates";
import type { DashboardDefaultType } from "@/entities/admin/DashboardDefault";

export default function DashboardDefault({
  setActiveTab,
}: DashboardDefaultType) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          관리자 대시보드
        </h1>
        <p className="text-gray-600">은혜교회 웹사이트 관리 시스템</p>
      </div>
      <DashboardStates />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            최근 활동
          </h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              새로운 주보가 등록되었습니다
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              예배 일정이 업데이트되었습니다
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              교회 소식이 발행되었습니다
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            빠른 작업
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab("bulletins")}
              className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-900">새 주보 작성</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("notice")}
              className="w-full text-left p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-red-900">긴급 공지사항 작성</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <Newspaper className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-900">교회 소식 등록</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

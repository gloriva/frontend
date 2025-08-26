export default function DashboardRecentActivity() {
  return (
    <div className={`grid grid-cols-1 gap-6 lg:grid-cols-1`}>
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">최근 활동</h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
            새로운 주보가 등록되었습니다
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="mr-3 h-2 w-2 rounded-full bg-green-400"></div>
            예배 일정이 업데이트되었습니다
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="mr-3 h-2 w-2 rounded-full bg-purple-400"></div>
            교회 소식이 발행되었습니다
          </div>
        </div>
      </div>
      {/* <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            빠른 작업
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab("bulletins")}
              className={`w-full rounded-lg bg-blue-50 p-3 text-left transition-colors hover:bg-blue-100`}
            >
              <div className="flex items-center">
                <FileText className="mr-3 h-5 w-5 text-blue-600" />
                <span className="text-blue-900">새 주보 작성</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("notice")}
              className={`w-full rounded-lg bg-red-50 p-3 text-left transition-colors hover:bg-red-100`}
            >
              <div className="flex items-center">
                <Bell className="mr-3 h-5 w-5 text-red-600" />
                <span className="text-red-900">긴급 공지사항 작성</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`w-full rounded-lg bg-green-50 p-3 text-left transition-colors hover:bg-green-100`}
            >
              <div className="flex items-center">
                <Newspaper className="mr-3 h-5 w-5 text-green-600" />
                <span className="text-green-900">교회 소식 등록</span>
              </div>
            </button>
          </div>
        </div> */}
    </div>
  );
}

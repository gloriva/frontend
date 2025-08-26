import {
  BulletinManager,
  DashboardDefault,
  NewsManager,
  NoticeManager,
  WorshipManager,
} from "@/features/admin";
import { useCommonStore } from "@/features/admin/store/common";
import { useCallback } from "react";

interface useAdminHandlerType {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}
const useAdminHandler = ({ setIsOpen }: useAdminHandlerType) => {
  const tab = useCommonStore((state) => state.activeTab);
  const setActiveTab = useCommonStore((state) => state.changeTab);

  const handleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const renderContent = useCallback(() => {
    switch (tab) {
      case "dashboard":
        return <DashboardDefault setActiveTab={setActiveTab} />;
      case "bulletins":
        return <BulletinManager />; // 주보 관리
      case "worship":
        return <WorshipManager />; // 예배 일정
      case "news":
        return <NewsManager />; //교회 소식
      case "notice":
        return <NoticeManager />; // 공지사항
      default:
        return <div>페이지를 찾을 수 없습니다</div>;
    }
  }, [tab]);

  return { handleMenu, renderContent };
};

export default useAdminHandler;

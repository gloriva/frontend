import { useState } from "react";
import { motion } from "framer-motion";
import {
  AdminSideBar,
  BulletinManager,
  DashboardDefault,
  NewsManager,
  NoticeManager,
  WorshipManager,
} from "@/features/admin";
import { fadeInUp } from "@/shared/constants/FadeInUp";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (activeTab) {
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
  };

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="flex">
        <AdminSideBar
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          handleMenu={handleMenu}
          isOpen={isOpen}
        />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 p-8">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

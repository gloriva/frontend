import { useState } from "react";
import { motion } from "framer-motion";
import { AdminSideBar } from "@/features/admin";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { useCommonStore } from "@/features/admin/store/common";
import useAdminHandler from "@/features/admin/utils/Admin";

const Admin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tab = useCommonStore((state) => state.activeTab);
  const { handleMenu, renderContent } = useAdminHandler({ setIsOpen });

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex">
        <AdminSideBar handleMenu={handleMenu} isOpen={isOpen} />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 p-8">
          <motion.div
            key={tab}
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

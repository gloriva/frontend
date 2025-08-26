import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { Bell, Shield, Settings } from "lucide-react";
import { sideBarData } from "@/features/user/constants/SideBarData";

export default function UserSideBar() {
  return (
    <motion.div
      className="space-y-8"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* 통계 */}
      <motion.div
        className="rounded-xl bg-white p-6 shadow-lg"
        variants={fadeInUp}
      >
        <h3 className="mb-6 text-lg font-bold text-gray-900">나의 활동</h3>
        <div className="grid grid-cols-2 gap-4">
          {sideBarData.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={` ${stat.color} mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 설정 메뉴 */}
      <motion.div
        className="rounded-xl bg-white p-6 shadow-lg"
        variants={fadeInUp}
      >
        <h3 className="mb-6 text-lg font-bold text-gray-900">설정</h3>
        <div className="space-y-3">
          {[
            { icon: Bell, label: "알림 설정", color: "text-blue-600" },
            {
              icon: Shield,
              label: "보안 설정",
              color: "text-green-600",
            },
            {
              icon: Settings,
              label: "계정 설정",
              color: "text-gray-600",
            },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex w-full items-center rounded-lg p-3 text-left transition-colors hover:bg-gray-50`}
            >
              <item.icon className={`h-5 w-5 ${item.color} mr-3`} />
              <span className="text-gray-900">{item.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

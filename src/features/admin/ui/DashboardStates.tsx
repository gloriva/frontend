import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Newspaper,
  Bell,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { stagger } from "@/shared/constants/Stagger";
import { fadeInUp } from "@/shared/constants/FadeInUp";

interface StatCard {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  change?: number;
}

export const DashboardStates = () => {
  const [states, setStates] = useState<StatCard[]>([
    { title: "주보", value: 0, icon: FileText, color: "bg-blue-500" },
    { title: "예배 일정", value: 0, icon: Calendar, color: "bg-green-500" },
    { title: "교회 소식", value: 0, icon: Newspaper, color: "bg-purple-500" },
    { title: "공지사항", value: 0, icon: Bell, color: "bg-red-500" },
  ]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);

      // const [bulletins, schedules, news, announcements] = await Promise.all([
      //   lumi.entities.bulletins.list().catch(() => ({ list: [] })),
      //   lumi.entities.worship_schedules.list().catch(() => ({ list: [] })),
      //   lumi.entities.church_news.list().catch(() => ({ list: [] })),
      //   lumi.entities.announcements.list().catch(() => ({ list: [] })),
      // ]);

      setStates([
        {
          title: "주보",
          value: 0,
          icon: FileText,
          color: "bg-blue-500",
        },
        {
          title: "예배 일정",
          value: 0,
          icon: Calendar,
          color: "bg-green-500",
        },
        {
          title: "교회 소식",
          value: 0,
          icon: Newspaper,
          color: "bg-purple-500",
        },
        {
          title: "공지사항",
          value: 0,
          icon: Bell,
          color: "bg-red-500",
        },
      ]);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm animate-pulse"
          >
            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {states.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            {stat.change && (
              <div
                className={`flex items-center text-sm ${stat.change > 0 ? "text-green-600" : "text-red-600"}`}
              >
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.change > 0 ? "+" : ""}
                {stat.change}%
              </div>
            )}
          </div>
          <h3 className="text-gray-600 text-sm font-medium mb-1">
            {stat.title}
          </h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DashboardStates;

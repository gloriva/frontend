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

const ElementsListUp = () => {
  const [states, setStates] = useState<StatCard[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);
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
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4`}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="animate-pulse rounded-xl bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-lg bg-gray-200"></div>
            <div className="mb-2 h-4 rounded bg-gray-200"></div>
            <div className="h-8 rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4`}
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {states.map((stat, index) => (
        <motion.div
          key={index}
          className={`cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md`}
          variants={fadeInUp}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className={` ${stat.color} rounded-lg p-3`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            {stat.change && (
              <div
                className={`flex items-center text-sm ${stat.change > 0 ? "text-green-600" : `text-red-600`} `}
              >
                <TrendingUp className="mr-1 h-4 w-4" />
                {stat.change > 0 ? "+" : ""}
                {stat.change}%
              </div>
            )}
          </div>
          <h3 className="mb-1 text-sm font-medium text-gray-600">
            {stat.title}
          </h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ElementsListUp;

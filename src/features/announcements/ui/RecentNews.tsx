import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";

interface Notice {
  title: string;
  date: string;
  category: string;
  important: boolean;
}

const recentNotices: Notice[] = [
  {
    title: "2025년 신년 감사예배 안내",
    date: "2025.01.15",
    category: "예배",
    important: true,
  },
  {
    title: "청년부 겨울 수련회 모집",
    date: "2025.01.14",
    category: "교육",
    important: false,
  },
  {
    title: "주일학교 교사 모집",
    date: "2025.01.13",
    category: "교육",
    important: false,
  },
];

export const RecentNews: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section background="white">
      <motion.div
        className="flex justify-between items-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            최근 소식
          </h2>
          <p className="text-lg text-gray-600">교회의 최신 소식을 확인하세요</p>
        </div>
        <Link
          to="/announcements"
          className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
        >
          전체 보기
          <ChevronRight className="ml-1 h-5 w-5" />
        </Link>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {recentNotices.map((notice, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card hover>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  {notice.category}
                </span>
                {notice.important && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    중요
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {notice.title}
              </h3>
              <p className="text-sm text-gray-500">{notice.date}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

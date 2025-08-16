import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { recentNotices } from "@/features/notice/constants/RecentNotices";

function RecentNews() {
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
          to="/home/announcements"
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
}

export default RecentNews;

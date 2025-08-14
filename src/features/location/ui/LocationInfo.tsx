import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

export const LocationInfo: React.FC = () => {
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
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            교회에 오시는 길
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            언제든지 편안하게 방문해주세요
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <div className="bg-white/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold">교회 위치</h3>
              </div>
              <div className="space-y-4 text-blue-100">
                <p className="text-lg">
                  <span className="font-semibold text-white">주소:</span>
                  서울특별시 강남구 테헤란로 123
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">전화:</span>
                  02-1234-5678
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">지하철:</span>
                  2호선 강남역 3번 출구 도보 5분
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">버스:</span>
                  146, 401, 472번 버스 이용
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              to="/location"
              className="block bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-colors"
            >
              <div className="text-center">
                <MapPin className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">상세한 길 안내</h3>
                <p className="text-blue-100 mb-4">
                  지도와 함께 자세한 교통편을 확인하세요
                </p>
                <span className="inline-flex items-center text-yellow-300 font-semibold">
                  길 안내 보기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

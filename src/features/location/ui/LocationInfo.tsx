import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
// 반복되는 값 import로 불러오기
export default function LocationInfo() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className="mb-12 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-4 text-3xl font-bold lg:text-4xl`}>
            교회에 오시는 길
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            언제든지 편안하게 방문해주세요
          </p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <div className="rounded-xl bg-white/10 p-8">
              <div className="mb-6 flex items-center">
                <MapPin className="mr-3 h-8 w-8 text-yellow-300" />
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
              className={`block rounded-xl bg-white/10 p-8 transition-colors hover:bg-white/20`}
            >
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-yellow-300" />
                <h3 className="mb-2 text-xl font-bold">상세한 길 안내</h3>
                <p className="mb-4 text-blue-100">
                  지도와 함께 자세한 교통편을 확인하세요
                </p>
                <span className="inline-flex items-center font-semibold text-yellow-300">
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
}

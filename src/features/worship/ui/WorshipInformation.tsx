import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";

export default function WorshipInformation() {
  return (
    <section className="bg-white py-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
            예배 안내사항
          </h2>
          <p className="text-lg text-gray-600">
            더 나은 예배를 위한 안내사항입니다
          </p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="rounded-xl bg-blue-50 p-8" variants={fadeInUp}>
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              예배 참석 안내
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                예배 10분 전까지 입장해주세요
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                휴대폰은 무음 또는 진동으로 설정해주세요
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                어린이들을 위한 유아부실이 준비되어 있습니다
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                처음 오신 분들은 안내데스크에서 도움을 받으세요
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-xl bg-green-50 p-8"
            variants={fadeInUp}
          >
            <h3 className="mb-6 text-xl font-bold text-gray-900">시설 안내</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                주차장은 교회 지하 1층에 있습니다
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                엘리베이터를 이용하실 수 있습니다
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                휠체어 이용자를 위한 시설이 준비되어 있습니다
              </li>
              <li className="flex items-start">
                <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                수유실과 기저귀 교환대가 있습니다
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

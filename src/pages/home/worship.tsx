import { WorshipContact } from "@/features/info";
import {
  WorshipInformation,
  WorshipOrder,
  WorshipTimeTable,
} from "@/features/worship";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";

const Worship = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div
          className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg')] bg-cover bg-center opacity-20`}
        ></div>
        <div
          className={`relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8`}
        >
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className={`mb-6 text-4xl font-bold lg:text-5xl`}
              variants={fadeInUp}
            >
              예배 안내
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-blue-100"
              variants={fadeInUp}
            >
              하나님께 예배드리는 시간에 함께하세요
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 예배 시간 안내 */}
      <WorshipTimeTable />

      {/* 주일 대예배 순서 */}
      <WorshipOrder />

      {/* 예배 안내사항 */}
      <WorshipInformation />

      {/* 연락처 및 문의 */}
      <WorshipContact />
    </div>
  );
};

export default Worship;

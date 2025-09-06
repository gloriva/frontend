import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";

export default function ChurchStatistics() {
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
            함께하는 은혜교회
          </h2>
          <p className="text-xl text-blue-100">숫자로 보는 우리 교회의 모습</p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-2 gap-8 lg:grid-cols-4`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { number: "500+", label: "등록 성도" },
            { number: "40년", label: "교회 역사" },
            { number: "15개", label: "교육 부서" },
            { number: "50+", label: "봉사 사역" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" variants={fadeInUp}>
              <div
                className={`mb-2 text-4xl font-bold text-yellow-300 lg:text-5xl`}
              >
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

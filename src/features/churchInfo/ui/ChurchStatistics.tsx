import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";

export default function ChurchStatistics() {
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
            함께하는 은혜교회
          </h2>
          <p className="text-xl text-blue-100">숫자로 보는 우리 교회의 모습</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
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
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

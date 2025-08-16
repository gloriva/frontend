import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { ChurchHistoryData } from "@/features/churchInfo/constants/ChurchHistoryData";

export default function ChurchHistory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            교회 연혁
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하나님의 은혜로 걸어온 40년의 여정을 돌아봅니다
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* 타임라인 라인 */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {ChurchHistoryData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                variants={fadeInUp}
              >
                {/* 타임라인 점 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

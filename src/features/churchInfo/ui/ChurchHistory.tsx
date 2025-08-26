import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { ChurchHistoryData } from "@/features/churchInfo/constants/ChurchHistoryData";

export default function ChurchHistory() {
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
            교회 연혁
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
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
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-px transform bg-blue-200"></div>

          <div className="space-y-12">
            {ChurchHistoryData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } `}
                variants={fadeInUp}
              >
                {/* 타임라인 점 */}
                <div
                  className={`absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-600 shadow-lg`}
                ></div>

                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"} `}
                >
                  <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                    <div className="mb-2 text-2xl font-bold text-blue-600">
                      {item.year}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
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

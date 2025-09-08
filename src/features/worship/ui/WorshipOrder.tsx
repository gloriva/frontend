import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { worshipOrder } from "@/features/worship/constants/WorshipOrder";

export default function WorshipOrder() {
  return (
    <section className="bg-gray-50 py-16">
      <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
            주일 대예배 순서
          </h2>
          <p className="text-lg text-gray-600">
            주일 오전 10:30 예배 순서입니다
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl bg-white p-8 shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-4">
            {worshipOrder.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between border-b border-gray-100 py-4 last:border-b-0`}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600`}
                  >
                    {item.time}
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.activity}
                  </span>
                </div>
                <div className="h-4 w-4 rounded-full bg-blue-200"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

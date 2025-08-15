import { motion } from "framer-motion";
import { fadeInUp } from "@/features/churchInfo/constants/FadeInUp";
import { stagger } from "@/features/churchInfo/constants/Stagger";
import { VisionData } from "@/features/churchInfo/constants/VisionData";

export default function ChurchVision() {
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
            우리의 비전
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            은혜교회는 하나님의 말씀을 기반으로 모든 세대가 함께 성장하며,
            지역사회와 세계를 향해 하나님의 사랑을 전하는 교회입니다.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {VisionData.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div
                className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

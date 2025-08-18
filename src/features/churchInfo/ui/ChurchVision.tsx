import { motion } from "framer-motion";
import { stagger } from "@/shared/constants/Stagger";
import { VisionData } from "@/features/churchInfo/constants/VisionData";
import { fadeInUp } from "@/shared/constants/FadeInUp";

export default function ChurchVision() {
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
            우리의 비전
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            은혜교회는 하나님의 말씀을 기반으로 모든 세대가 함께 성장하며,
            지역사회와 세계를 향해 하나님의 사랑을 전하는 교회입니다.
          </p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {VisionData.map((value, index) => (
            <motion.div
              key={index}
              className={`rounded-xl bg-gray-50 p-8 text-center transition-shadow hover:shadow-lg`}
              variants={fadeInUp}
            >
              <div
                className={` ${value.color} mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
              >
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {value.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

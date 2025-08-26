import { motion } from "framer-motion";
import { Award, Target } from "lucide-react";
import { fadeInUp } from "../../../shared/constants/FadeInUp";

export default function PastorIntroduction() {
  return (
    <section className="bg-gray-50 py-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
              alt="담임목사"
              className="h-96 w-full rounded-xl object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
              담임목사 소개
            </h2>
            <h3 className="mb-4 text-2xl font-semibold text-blue-600">
              김은혜 목사
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              총신대학교 신학과와 총신대학교 신학대학원을 졸업하고, 1985년부터
              은혜교회를 섬기고 있습니다.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              "모든 성도가 하나님의 은혜 안에서 성장하고, 이웃을 사랑하는 교회가
              되기를 소망합니다."
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <Award className="mr-3 h-5 w-5 text-blue-600" />
                <span>총신대학교 신학과 졸업</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-3 h-5 w-5 text-blue-600" />
                <span>총신대학교 신학대학원 졸업</span>
              </div>
              <div className="flex items-center">
                <Target className="mr-3 h-5 w-5 text-blue-600" />
                <span>은혜교회 담임목사 (1985~현재)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

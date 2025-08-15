import { motion } from "framer-motion";
import { Award, Target } from "lucide-react";
import { fadeInUp } from "../../../shared/constants/FadeInUp";

export default function PastorIntroduction() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
              alt="담임목사"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              담임목사 소개
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              김은혜 목사
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              총신대학교 신학과와 총신대학교 신학대학원을 졸업하고, 1985년부터
              은혜교회를 섬기고 있습니다.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "모든 성도가 하나님의 은혜 안에서 성장하고, 이웃을 사랑하는 교회가
              되기를 소망합니다."
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-3" />
                <span>총신대학교 신학과 졸업</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-3" />
                <span>총신대학교 신학대학원 졸업</span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-3" />
                <span>은혜교회 담임목사 (1985~현재)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

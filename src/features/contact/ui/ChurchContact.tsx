import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function ChurchContact() {
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
            교회 위치
          </h2>
          <p className="text-lg text-gray-600">
            강남 중심가에 위치한 은혜교회입니다
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* 주소 및 연락처 정보 */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="bg-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">교회 주소</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold">주소:</span>
                  서울특별시 강남구 테헤란로 123
                </p>
                <p className="text-lg">
                  <span className="font-semibold">우편번호:</span>
                  06234
                </p>
                <div className="flex items-center pt-4">
                  <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-lg font-semibold">02-1234-5678</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">예배 시간</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">주일 대예배</span>
                  <span>오전 10:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">주일 오후예배</span>
                  <span>오후 2:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">수요 예배</span>
                  <span>오후 7:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">새벽 예배</span>
                  <span>오전 6:00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 지도 영역 */}
          <motion.div
            className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
            variants={fadeInUp}
          >
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">지도가 여기에 표시됩니다</p>
              <p className="text-sm mt-2">
                실제 구현 시 Google Maps 또는 네이버 지도 API 연동
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

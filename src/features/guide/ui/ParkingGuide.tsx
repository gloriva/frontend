import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Car, Navigation } from "lucide-react";

export default function ParkingGuide() {
  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">주차 안내</h2>
          <p className="text-xl text-emerald-100 mb-8">
            편리한 주차 시설을 제공합니다
          </p>
          <div className="bg-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Car className="h-6 w-6 mr-3" />
                  교회 주차장
                </h3>
                <ul className="space-y-2 text-emerald-100">
                  <li>• 지하 1층 주차장 (50대 주차 가능)</li>
                  <li>• 주일 예배 시간 무료 이용</li>
                  <li>• 장애인 전용 주차구역 3면</li>
                  <li>• 엘리베이터 직접 연결</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Navigation className="h-6 w-6 mr-3" />
                  인근 주차장
                </h3>
                <ul className="space-y-2 text-emerald-100">
                  <li>• 강남역 공영주차장 (도보 5분)</li>
                  <li>• 테헤란로 공영주차장 (도보 3분)</li>
                  <li>• 주말 성당 주차장 이용 가능</li>
                  <li>• 유료 주차장 할인 제공</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-emerald-100 mt-6">
            주차 관련 문의: 02-1234-5678 (총무부)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

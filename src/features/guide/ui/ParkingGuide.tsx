import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Car, Navigation } from "lucide-react";

export default function ParkingGuide() {
  return (
    <section className="bg-emerald-600 py-16 text-white">
      <div className={`mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8`}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold lg:text-4xl`}>주차 안내</h2>
          <p className="mb-8 text-xl text-emerald-100">
            편리한 주차 시설을 제공합니다
          </p>
          <div className="rounded-xl bg-white/10 p-8">
            <div className={`grid grid-cols-1 gap-8 text-left md:grid-cols-2`}>
              <div>
                <h3 className="mb-4 flex items-center text-lg font-bold">
                  <Car className="mr-3 h-6 w-6" />
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
                <h3 className="mb-4 flex items-center text-lg font-bold">
                  <Navigation className="mr-3 h-6 w-6" />
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
          <p className="mt-6 text-emerald-100">
            주차 관련 문의: 02-1234-5678 (총무부)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

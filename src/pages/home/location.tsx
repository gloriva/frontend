import { ChurchContact } from "@/features/contact";
import { ParkingGuide, TransportGuide } from "@/features/guide";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/161060/architecture-building-church-161060.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              오시는 길
            </motion.h1>
            <motion.p
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              은혜교회로 오시는 다양한 방법을 안내해드립니다
            </motion.p>
          </motion.div>
        </div>
      </section>
      <ChurchContact />
      <TransportGuide />
      <ParkingGuide />
    </div>
  );
};

export default Location;

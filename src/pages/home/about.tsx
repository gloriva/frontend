import { ChurchVision, ChurchHistory } from "@/features/about";
import { PastorIntroduction } from "@/features/ministry";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div
          className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/161060/architecture-building-church-161060.jpeg')] bg-cover bg-center opacity-20`}
        ></div>
        <div
          className={`relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8`}
        >
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className={`mb-6 text-4xl font-bold lg:text-5xl`}
              variants={fadeInUp}
            >
              교회 소개
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-blue-100"
              variants={fadeInUp}
            >
              하나님의 은혜로 40년을 걸어온 은혜교회의 이야기를 소개합니다
            </motion.p>
          </motion.div>
        </div>
      </section>
      <ChurchVision />
      <PastorIntroduction />
      <ChurchHistory />
      {/* <ChurchStatistics /> */}
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";
import { Button } from "@/shared/ui/Button";

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/161060/architecture-building-church-161060.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            하나님의 은혜가
            <br />
            <span className="text-yellow-300">충만한 교회</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            모든 분들을 따뜻하게 환영하며, 함께 하나님의 사랑을 나누는
            공동체입니다
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link to="/home/about">
              <Button variant="secondary" icon={ChevronRight}>
                교회 소개 보기
              </Button>
            </Link>
            <Link to="/home/worship">
              <Button variant="outline" icon={Clock}>
                예배 시간 확인
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

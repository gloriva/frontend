import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { fadeInUp } from "@/shared/constants/FadeInUp";
function ChurchIntro() {
  return (
    <Section background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            은혜교회를 소개합니다
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            1985년 설립된 은혜교회는 40년 가까운 역사를 가진 교회로, 하나님의
            말씀을 바탕으로 지역사회와 함께 성장해왔습니다.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            우리는 모든 세대가 함께 예배하고, 서로 사랑하며, 복음을 전하는
            건강한 교회 공동체를 만들어가고 있습니다.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">성도 수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40년</div>
              <div className="text-gray-600">교회 역사</div>
            </div>
          </div>
          <Link to="/home/about">
            <Button variant="primary" icon={ChevronRight}>
              더 자세히 보기
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src="https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg"
            alt="교회 내부"
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </Section>
  );
}

export default ChurchIntro;

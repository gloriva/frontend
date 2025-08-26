import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { fadeInUp } from "@/shared/constants/FadeInUp";
function ChurchIntro() {
  return (
    <Section background="gray">
      <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
            은혜교회를 소개합니다
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            1985년 설립된 은혜교회는 40년 가까운 역사를 가진 교회로, 하나님의
            말씀을 바탕으로 지역사회와 함께 성장해왔습니다.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            우리는 모든 세대가 함께 예배하고, 서로 사랑하며, 복음을 전하는
            건강한 교회 공동체를 만들어가고 있습니다.
          </p>
          <div className="mb-8 grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">성도 수</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">40년</div>
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
            className="h-96 w-full rounded-xl object-cover shadow-lg"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
      </div>
    </Section>
  );
}

export default ChurchIntro;

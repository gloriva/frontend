import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

export default function WorshipContact() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className={`mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8`}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold lg:text-4xl`}>
            예배 관련 문의
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            예배에 대한 궁금한 사항이 있으시면 언제든 연락주세요
          </p>
          <div
            className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8`}
          >
            <div className="flex items-center">
              <Phone className="mr-3 h-6 w-6" />
              <span className="text-lg">02-1234-5678</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-3 h-6 w-6" />
              <span className="text-lg">평일 9:00-18:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

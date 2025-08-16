import React from "react";
import { motion } from "framer-motion";
import { Calendar, Heart, Clock } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";

interface WorshipService {
  title: string;
  time: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const worshipServices: WorshipService[] = [
  {
    title: "주일 대예배",
    time: "오전 10:30",
    description: "모든 성도가 함께 드리는 주일 대예배",
    icon: Calendar,
    color: "bg-blue-500",
  },
  {
    title: "수요 예배",
    time: "오후 7:30",
    description: "주중 은혜 충전의 시간",
    icon: Heart,
    color: "bg-green-500",
  },
  {
    title: "새벽 예배",
    time: "오전 6:00",
    description: "하루를 하나님께 맡기는 시간",
    icon: Clock,
    color: "bg-orange-500",
  },
];
function WorshipSchedule() {
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
    <Section background="white">
      <motion.div
        className="text-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          예배 시간 안내
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          하나님께 예배드리는 시간에 함께하세요
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {worshipServices.map((service, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card hover className="text-center">
              <div
                className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">
                {service.time}
              </p>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default WorshipSchedule;

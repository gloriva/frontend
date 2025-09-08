import { motion } from "framer-motion";
import { Calendar, Heart, Clock, type LucideIcon } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";

interface WorshipService {
  title: string;
  time: string;
  description: string;
  icon: LucideIcon;
  color?: string;
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
        className="mb-12 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className={`mb-4 text-3xl font-bold text-gray-900 lg:text-4xl`}>
          예배 시간 안내
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          하나님께 예배드리는 시간에 함께하세요
        </p>
      </motion.div>

      <motion.div
        className={`grid grid-cols-1 gap-8 md:grid-cols-3`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {worshipServices.map((service, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card hover className="text-center">
              <div
                className={` ${service.color} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-3 text-2xl font-bold text-blue-600">
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

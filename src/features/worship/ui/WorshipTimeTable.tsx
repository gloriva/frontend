import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { worshipServices } from "@/features/worship/constants/WorshiptServices";
import { MapPin, Clock } from "lucide-react";

export default function WorshipTimeTable() {
  return (
    <section className="bg-white py-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
            예배 시간표
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            다양한 예배를 통해 하나님과 만나는 시간을 가져보세요
          </p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {worshipServices.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-xl bg-gray-50 p-8 transition-shadow hover:shadow-lg`}
              variants={fadeInUp}
            >
              <div
                className={` ${service.color} mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <div className="mb-2 flex items-center font-semibold text-blue-600">
                <Clock className="mr-2 h-5 w-5" />
                {service.time}
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                {service.location}
              </div>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <div className="space-y-2">
                {service.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

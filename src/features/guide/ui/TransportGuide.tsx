import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { transportOptions } from "@/features/guide/constants/TransportOptions";

export default function TransportGuide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            교통편 안내
          </h2>
          <p className="text-lg text-gray-600">
            다양한 교통수단을 이용하여 편리하게 오실 수 있습니다
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {transportOptions.map((transport, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className={`${transport.color} p-6 text-white`}>
                <div className="flex items-center">
                  <transport.icon className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">{transport.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {transport.routes.map((route, routeIndex) => (
                    <div
                      key={routeIndex}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {route.line}
                        </h4>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {route.walkTime}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p>
                          <span className="font-medium">정류장/역:</span>{" "}
                          {route.station}
                        </p>
                        <p>
                          <span className="font-medium">출구:</span>{" "}
                          {route.exit}
                        </p>
                        <p className="text-sm">{route.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

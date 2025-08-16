import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { activities } from "@/features/user/constants/UserActivity";

export default function RecentActivity() {
  return (
    <motion.div
      className="mt-12 bg-white rounded-xl shadow-lg p-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  {activity.activity}
                </h4>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {activity.type}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

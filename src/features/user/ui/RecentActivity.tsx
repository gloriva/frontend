import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { activities } from "@/features/user/constants/UserActivity";

export default function RecentActivity() {
  return (
    <motion.div
      className="mt-12 rounded-xl bg-white p-8 shadow-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="mb-6 text-2xl font-bold text-gray-900">최근 활동</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
          >
            <div className="flex items-center">
              <div
                className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100`}
              >
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  {activity.activity}
                </h4>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
              {activity.type}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

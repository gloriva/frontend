import type { NoticeListType } from "@/entities/notice/NoticeList";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { Calendar, Eye, Star, Tag } from "lucide-react";

export default function NoticeList({
  filteredAnnouncements,
  getCategoryColor,
  setSelectedAnnouncement,
  formatDate,
}: NoticeListType) {
  return (
    <section className="py-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        {filteredAnnouncements.length === 0 ? (
          <motion.div
            className="py-16 text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-500">검색 결과가 없습니다.</p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {filteredAnnouncements.map((announcement) => (
              <motion.div
                key={announcement.id}
                className={`cursor-pointer rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg`}
                variants={fadeInUp}
                id="announcement"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center space-x-3">
                        {announcement.isImportant && (
                          <span
                            className={`flex items-center rounded-full bg-red-100 px-2 py-1 text-xs text-red-600`}
                          >
                            <Star className="mr-1 h-3 w-3" />
                            중요
                          </span>
                        )}
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${getCategoryColor(announcement.category)} `}
                        >
                          <Tag className="mr-1 inline h-3 w-3" />
                          {announcement.category}
                        </span>
                      </div>
                      <h3
                        className={`mb-2 text-xl font-bold text-gray-900 transition-colors hover:text-purple-600`}
                      >
                        {announcement.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-gray-600">
                        {announcement.content}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {formatDate(announcement.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Eye className="mr-1 h-4 w-4" />
                          {announcement.views}
                        </div>
                        <span>작성자: {announcement.author}</span>
                      </div>
                    </div>
                    {announcement.imageUrl && (
                      <img
                        src={announcement.imageUrl}
                        alt={announcement.title}
                        className="ml-6 h-24 w-24 rounded-lg object-cover"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

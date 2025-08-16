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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredAnnouncements.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                variants={fadeInUp}
                id="announcement"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {announcement.isImportant && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            중요
                          </span>
                        )}
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(announcement.category)}`}
                        >
                          <Tag className="h-3 w-3 mr-1 inline" />
                          {announcement.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {announcement.content}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(announcement.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {announcement.views}
                        </div>
                        <span>작성자: {announcement.author}</span>
                      </div>
                    </div>
                    {announcement.imageUrl && (
                      <img
                        src={announcement.imageUrl}
                        alt={announcement.title}
                        className="w-24 h-24 object-cover rounded-lg ml-6"
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

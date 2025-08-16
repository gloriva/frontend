import { motion } from "framer-motion";
import { Star, Tag, Calendar, Eye } from "lucide-react";
import type { NoticeModalType } from "../constants/NoticeModal";

export default function NoticeModal({
  selectedAnnouncement,
  getCategoryColor,
  formatDate,
  setSelectedAnnouncement,
}: NoticeModalType) {
  return (
    selectedAnnouncement && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  {selectedAnnouncement.isImportant && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      중요
                    </span>
                  )}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedAnnouncement.category)}`}
                  >
                    <Tag className="h-3 w-3 mr-1 inline" />
                    {selectedAnnouncement.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedAnnouncement.title}
                </h2>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(selectedAnnouncement.createdAt)}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {selectedAnnouncement.views}
                  </div>
                  <span>작성자: {selectedAnnouncement.author}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {selectedAnnouncement.imageUrl && (
              <img
                src={selectedAnnouncement.imageUrl}
                alt={selectedAnnouncement.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedAnnouncement.content}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );
}

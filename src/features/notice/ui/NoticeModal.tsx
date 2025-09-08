import { motion } from "framer-motion";
import { Star, Tag, Calendar, Eye } from "lucide-react";
import type { NoticeModalType } from "../constants/NoticeModal";
import { getCategoryColor } from "@/shared/utils/CategoryColor";
import { formatDate } from "@/shared/utils/FormateDate";

export default function NoticeModal({
  selectedAnnouncement,
  setSelectedAnnouncement,
}: NoticeModalType) {
  return (
    selectedAnnouncement && (
      <div
        className={`bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4`}
      >
        <motion.div
          className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <div className="p-6">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-3 flex items-center space-x-3">
                  {selectedAnnouncement.isImportant && (
                    <span
                      className={`flex items-center rounded-full bg-red-100 px-2 py-1 text-xs text-red-600`}
                    >
                      <Star className="mr-1 h-3 w-3" />
                      중요
                    </span>
                  )}
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${getCategoryColor(selectedAnnouncement.category)} `}
                  >
                    <Tag className="mr-1 inline h-3 w-3" />
                    {selectedAnnouncement.category}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {selectedAnnouncement.title}
                </h2>
                <div className="mb-6 flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(selectedAnnouncement.createdAt)}
                  </div>
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    {selectedAnnouncement.views}
                  </div>
                  <span>작성자: {selectedAnnouncement.author}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className={`text-2xl text-gray-400 hover:text-gray-600`}
              >
                ×
              </button>
            </div>

            {selectedAnnouncement.imageUrl && (
              <img
                src={selectedAnnouncement.imageUrl}
                alt={selectedAnnouncement.title}
                className="mb-6 h-64 w-full rounded-lg object-cover"
              />
            )}

            <div className="prose max-w-none">
              <p className="leading-relaxed whitespace-pre-wrap text-gray-700">
                {selectedAnnouncement.content}
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className={`rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700`}
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

import { motion } from "framer-motion";
import { Bell, Calendar, Edit, Eye, Star, Trash2, User } from "lucide-react";
import {
  getCategoryColor,
  useNoticeHandlers,
} from "@/features/admin/utils/NoticeManager";
import { useNoticeManagerStore } from "../../store/NoticeManager";

export default function NoticeList() {
  const announcements = useNoticeManagerStore((state) => state.announcements);
  const { handleDelete, handleEdit } = useNoticeHandlers();
  return (
    <div className="p-6">
      {announcements.length === 0 ? (
        <div className="py-12 text-center">
          <Bell className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <p className="text-gray-500">등록된 공지사항이 없습니다</p>
          {/* <Button onClick={handleCreate} className="mt-4">
              첫 공지사항 작성하기
            </Button> */}
        </div>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <motion.div
              key={announcement._id}
              className={`rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between">
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
                      {announcement.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {announcement.title}
                    </h3>
                  </div>
                  <p className="mb-3 line-clamp-2 text-gray-600">
                    {announcement.content.replace(/<[^>]*>/g, "")}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {announcement.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(announcement.createdAt).toLocaleDateString(
                        "ko-KR",
                      )}
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {announcement.views}
                    </div>
                  </div>
                </div>
                {announcement.imageUrl && (
                  <img
                    src={announcement.imageUrl}
                    alt={announcement.title}
                    className="ml-4 h-20 w-20 rounded-lg object-cover"
                  />
                )}
                <div className="ml-4 flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(announcement)}
                    className={`p-2 text-gray-400 transition-colors hover:text-blue-600`}
                    title="수정"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(announcement._id)}
                    className={`p-2 text-gray-400 transition-colors hover:text-red-600`}
                    title="삭제"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

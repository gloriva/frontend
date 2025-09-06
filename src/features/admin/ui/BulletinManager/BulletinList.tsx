import { motion } from "framer-motion";
import { FileText, Calendar, User, Edit, Trash2 } from "lucide-react";
import {
  getStatusColor,
  getStatusText,
} from "@/features/admin/utils/NewsManager";
import { useBulletinManager } from "@/features/admin/store/BulletinManager";
import useBulletinHook from "@/features/admin/utils/BulletinManager";

export default function BulletinList() {
  const bulletins = useBulletinManager((state) => state.bulletins);
  const { handleDelete, handleEdit } = useBulletinHook();
  return (
    <div className="overflow-auto p-6">
      {bulletins.length === 0 ? (
        <div className="py-12 text-center">
          <FileText className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <p className="text-gray-500">등록된 주보가 없습니다</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bulletins.map((bulletin, i) => (
            <motion.div
              key={i}
              className={`rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {bulletin.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(bulletin.status)} `}
                    >
                      {getStatusText(bulletin.status)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(bulletin.date).toLocaleDateString("ko-KR")}
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {bulletin.author}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(bulletin)}
                    className={`p-2 text-gray-400 transition-colors hover:text-blue-600`}
                    title="수정"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(bulletin.id);
                    }}
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

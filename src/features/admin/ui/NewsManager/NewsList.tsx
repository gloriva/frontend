import { motion } from "framer-motion";
import { Newspaper, User, Calendar, Tag, Edit, Trash2 } from "lucide-react";
import {
  getStatusColor,
  getStatusText,
  getCategoryLabel,
} from "@/features/admin/utils/NewsManager";
import { useNewsManager } from "@/features/admin/store/NewsManager";
import type { NewsListType } from "@/entities/admin/NewsManager";

export default function NewsList({ handleDelete, handleEdit }: NewsListType) {
  const news = useNewsManager((state) => state.news);
  return (
    <div className="p-6">
      {news.length === 0 ? (
        <div className="py-12 text-center">
          <Newspaper className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <p className="text-gray-500">등록된 교회 소식이 없습니다</p>
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((newsItem) => (
            <motion.div
              key={newsItem.id}
              className={`rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    {/* 타이틀 */}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {newsItem.title}
                    </h3>
                    {/* 상태 */}
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(newsItem.status)} `}
                    >
                      {getStatusText(newsItem.status)}
                    </span>
                    {/* 행사 종류 */}
                    <span
                      className={`rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800`}
                    >
                      {getCategoryLabel(newsItem.category)}
                    </span>
                  </div>
                  {/* 행사 요약 */}
                  {newsItem.summary && (
                    <p className="mb-3 text-gray-600">{newsItem.summary}</p>
                  )}

                  <div className="mb-2 flex items-center space-x-4 text-sm text-gray-600">
                    {/* 게시자 */}
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {newsItem.author}
                    </div>
                    {/* 게시글 등록된 시간 */}
                    {newsItem.publishedAt && (
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(newsItem.publishedAt).toLocaleDateString(
                          "ko-KR",
                        )}
                      </div>
                    )}
                  </div>
                  {/* 태그 */}
                  {newsItem.tags && newsItem.tags.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <div className="flex flex-wrap gap-1">
                        {newsItem.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* 이미지 */}
                {newsItem.imageUrl && (
                  <img
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    className="ml-4 h-20 w-20 rounded-lg object-cover"
                  />
                )}
                <div className="ml-4 flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(newsItem)}
                    className={`p-2 text-gray-400 transition-colors hover:text-blue-600`}
                    title="수정"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(newsItem.id)}
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

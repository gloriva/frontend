import type { GalleryModalType } from "@/entities/gallery/GalleryModal";
import { motion } from "framer-motion";
import { X, Calendar, Camera, Eye, Heart } from "lucide-react";

export default function GalleryModal({
  selectedImage,
  setSelectedImage,
  getCategoryColor,
  formatDate,
}: GalleryModalType) {
  return (
    selectedImage && (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <motion.div
          className="relative max-w-4xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* 이미지 */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-96 object-cover"
            />

            {/* 이미지 정보 */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedImage.category)}`}
                    >
                      {selectedImage.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      행사일: {formatDate(selectedImage.eventDate)}
                    </div>
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2" />
                      촬영: {selectedImage.photographer}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      조회수: {selectedImage.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      좋아요: {selectedImage.likes}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );
}

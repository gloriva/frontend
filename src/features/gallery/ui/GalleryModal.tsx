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
      <div
        className={`bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4`}
      >
        <motion.div
          className="relative w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={() => setSelectedImage(null)}
            className={`absolute top-4 right-4 z-10 text-white hover:text-gray-300`}
          >
            <X className="h-8 w-8" />
          </button>

          {/* 이미지 */}
          <div className="overflow-hidden rounded-lg bg-white">
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-h-96 w-full object-cover"
            />

            {/* 이미지 정보 */}
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center space-x-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getCategoryColor(selectedImage.category)} `}
                    >
                      {selectedImage.category}
                    </span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {selectedImage.title}
                  </h2>
                  <p className="mb-4 text-gray-600">
                    {selectedImage.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      행사일: {formatDate(selectedImage.eventDate)}
                    </div>
                    <div className="flex items-center">
                      <Camera className="mr-2 h-4 w-4" />
                      촬영: {selectedImage.photographer}
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      조회수: {selectedImage.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      좋아요: {selectedImage.likes}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className={`rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700`}
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

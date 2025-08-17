import type { GalleryGridType } from "@/entities/gallery/GalleryGrid";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { motion } from "framer-motion";
import { Camera, Eye, Heart } from "lucide-react";

export default function GalleryGrid({
  filteredItems,
  formatDate,
  setSelectedImage,
  getCategoryColor,
}: GalleryGridType) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              해당 카테고리에 사진이 없습니다.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                variants={fadeInUp}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-white rounded-full p-3">
                        <Eye className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {item.likes}
                      </div>
                    </div>
                    <span>{formatDate(item.eventDate)}</span>
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

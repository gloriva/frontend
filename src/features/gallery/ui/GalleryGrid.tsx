import type { GalleryGridType } from "@/entities/gallery/type";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { getCategoryColor } from "@/shared/utils/CategoryColor";
import { formatDate } from "@/shared/utils/FormateDate";
import { motion } from "framer-motion";
import { Camera, Eye, Heart } from "lucide-react";

export default function GalleryGrid({
  filteredItems,
  setSelectedImage,
}: GalleryGridType) {
  return (
    <section className="py-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        {filteredItems.length === 0 ? (
          <motion.div
            className="py-16 text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Camera className="mx-auto mb-4 h-16 w-16 text-gray-400" />
            <p className="text-lg text-gray-500">
              해당 카테고리에 사진이 없습니다.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={i}
                className={`cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg`}
                variants={fadeInUp}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getCategoryColor(item.category)} `}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div
                    className={`bg-opacity-0 hover:bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black transition-all duration-300`}
                  >
                    <div
                      className={`opacity-0 transition-opacity hover:opacity-100`}
                    >
                      <div className="rounded-full bg-white p-3">
                        <Eye className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="mb-2 line-clamp-1 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="mr-1 h-3 w-3" />
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

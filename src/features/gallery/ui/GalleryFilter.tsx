import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { categories } from "@/features/gallery/constants/galleryCategories";
import type { GalleryFilterType } from "@/entities/gallery/type";

export default function GalleryFilter({
  setSelectedCategory,
  selectedCategory,
}: GalleryFilterType) {
  return (
    <section className="border-b bg-white py-8">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Filter className="h-5 w-5 text-gray-400" />
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : `bg-gray-100 text-gray-600 hover:bg-gray-200`
                } `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

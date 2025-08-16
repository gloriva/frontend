import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { categories } from "@/features/gallery/constants/galleryCategories";
import type { GalleryFilterType } from "@/entities/gallery/GalleryFilter";

export default function GalleryFilter({
  setSelectedCategory,
  selectedCategory,
}: GalleryFilterType) {
  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
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

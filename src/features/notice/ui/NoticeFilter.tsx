import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { categories } from "../constants/categories";

interface NoticeFilterType {
  searchTerm: string;
  inputData(sort: string, value: string): void;
  selectedCategory: string;
}
export default function NoticeFilter({
  searchTerm,
  inputData,
  selectedCategory,
}: NoticeFilterType) {
  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* 검색 */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="공지사항 검색..."
              value={searchTerm}
              id="search"
              onChange={(e) => inputData(e.target.id, e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* 카테고리 필터 */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  id="category"
                  onClick={(e) => inputData(e.currentTarget.id, category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

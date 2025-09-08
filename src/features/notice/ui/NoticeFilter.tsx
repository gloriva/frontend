import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { categories } from "../constants/categories";
import React from "react";
import type { NoticeFilterType } from "@/entities/notice/type";

const NoticeFilter = ({
  searchTerm,
  handleInputChange,
  selectedCategory,
}: NoticeFilterType) => {
  return (
    <section className="border-b bg-white py-8">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <motion.div
          className={`flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0`}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* 검색 */}
          <div className="relative max-w-md flex-1">
            <Search
              className={`absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400`}
            />
            <input
              type="text"
              placeholder="공지사항 검색..."
              value={searchTerm}
              id="search"
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              className={`w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-purple-500`}
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
                  onClick={(e) =>
                    handleInputChange(e.currentTarget.id, category)
                  }
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : `bg-gray-100 text-gray-600 hover:bg-gray-200`
                  } `}
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
};

export default React.memo(NoticeFilter);

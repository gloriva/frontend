import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { NoticeFilter } from "@/features/notice";
import { NoticeList } from "@/features/notice";
import type { FilteredAnnouncements } from "@/entities/notice/FilteredAnnouncements";
import { noticeData } from "@/features/notice/constants/notice";
import { NoticeModal } from "@/features/notice";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<FilteredAnnouncements[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<FilteredAnnouncements | null>(null);

  function inputData(sort: string, value: string) {
    switch (sort) {
      case "search":
        setSearchTerm(value);
        break;
      case "category":
        setSelectedCategory(value);
        break;
      default:
        break;
    }
  }

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setAnnouncements(noticeData || []);
    } catch (error) {
      console.error("Failed to fetch announcements:", error);
      toast.error("공지사항을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesCategory =
      selectedCategory === "전체" || announcement.category === selectedCategory;
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      일반: "bg-gray-100 text-gray-600",
      예배: "bg-blue-100 text-blue-600",
      교육: "bg-green-100 text-green-600",
      행사: "bg-purple-100 text-purple-600",
      긴급: "bg-red-100 text-red-600",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">공지사항을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              공지사항
            </motion.h1>
            <motion.p
              className="text-xl text-purple-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              교회의 최신 소식과 중요한 안내사항을 확인하세요
            </motion.p>
          </motion.div>
        </div>
      </section>
      <NoticeFilter
        searchTerm={searchTerm}
        inputData={inputData}
        selectedCategory={selectedCategory}
      />
      <NoticeList
        filteredAnnouncements={filteredAnnouncements}
        getCategoryColor={getCategoryColor}
        setSelectedAnnouncement={setSelectedAnnouncement}
        formatDate={formatDate}
      />
      <NoticeModal
        selectedAnnouncement={selectedAnnouncement}
        getCategoryColor={getCategoryColor}
        formatDate={formatDate}
        setSelectedAnnouncement={setSelectedAnnouncement}
      />
    </div>
  );
};

export default Announcements;

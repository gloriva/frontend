import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import { NoticeFilter } from "@/features/notice";
import { NoticeList } from "@/features/notice";
import type { FilteredAnnouncements } from "@/entities/notice/type";
import { noticeData } from "@/features/notice/constants/notice";
import { NoticeModal } from "@/features/notice";
import { inputNoticeData } from "@/features/notice/utils/inputNoticeData";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<FilteredAnnouncements[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<FilteredAnnouncements | null>(null);

  const handleInputChange = useCallback(
    (sort: string, value: string) => {
      inputNoticeData(sort, value, setSearchTerm, setSelectedCategory);
    },
    [setSearchTerm, setSelectedCategory],
  );

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

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((announcement) => {
      const matchesCategory =
        selectedCategory === "전체" ||
        announcement.category === selectedCategory;
      const matchesSearch =
        announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [announcements, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className={`mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600`}
          ></div>
          <p className="text-gray-600">공지사항을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 text-white">
        <div
          className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg')] bg-cover bg-center opacity-20`}
        ></div>
        <div
          className={`relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8`}
        >
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className={`mb-6 text-4xl font-bold lg:text-5xl`}
              variants={fadeInUp}
            >
              공지사항
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-purple-100"
              variants={fadeInUp}
            >
              교회의 최신 소식과 중요한 안내사항을 확인하세요
            </motion.p>
          </motion.div>
        </div>
      </section>
      <NoticeFilter
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        selectedCategory={selectedCategory}
      />
      <NoticeList
        filteredAnnouncements={filteredAnnouncements}
        setSelectedAnnouncement={setSelectedAnnouncement}
      />
      <NoticeModal
        selectedAnnouncement={selectedAnnouncement}
        setSelectedAnnouncement={setSelectedAnnouncement}
      />
    </div>
  );
};

export default Announcements;

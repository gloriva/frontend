import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import type { GalleryItem } from "@/entities/gallery/GalleryItem";
import { events } from "@/features/gallery/constants/mockData";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { stagger } from "@/shared/constants/Stagger";
import {
  GalleryFilter,
  GalleryGrid,
  GalleryLoading,
  GalleryModal,
} from "@/features/gallery";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      setGalleryItems(events || []);
    } catch (error) {
      console.error("Failed to fetch gallery items:", error);
      toast.error("갤러리를 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "전체" || item.category === selectedCategory,
  );

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
      예배: "bg-blue-100 text-blue-600",
      교육: "bg-green-100 text-green-600",
      행사: "bg-purple-100 text-purple-600",
      봉사: "bg-orange-100 text-orange-600",
      기타: "bg-gray-100 text-gray-600",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
    );
  };

  if (loading) {
    return <GalleryLoading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              갤러리
            </motion.h1>
            <motion.p
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              교회의 소중한 순간들을 사진으로 만나보세요
            </motion.p>
          </motion.div>
        </div>
      </section>
      <GalleryFilter
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <GalleryGrid
        filteredItems={filteredItems}
        formatDate={formatDate}
        setSelectedImage={setSelectedImage}
        getCategoryColor={getCategoryColor}
      />
      {/* 이미지 상세 모달 */}
      <GalleryModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        getCategoryColor={getCategoryColor}
        formatDate={formatDate}
      />
    </div>
  );
};

export default Gallery;

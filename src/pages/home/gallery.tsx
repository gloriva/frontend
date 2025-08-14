import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Eye, Heart, Camera, Filter, X } from "lucide-react";
// import { lumi } from "../lib/lumi";
import toast from "react-hot-toast";

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  photographer: string;
  eventDate: string;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

const Gallery = () => {
  const [galleryItems, _setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = ["전체", "예배", "교육", "행사", "봉사", "기타"];

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.gallery.list();
      // setGalleryItems(list || []);
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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">갤러리를 불러오는 중...</p>
        </div>
      </div>
    );
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

      {/* 카테고리 필터 */}
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

      {/* 갤러리 그리드 */}
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
              {filteredItems.map((item) => (
                <motion.div
                  key={item._id}
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

      {/* 이미지 상세 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* 이미지 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover"
              />

              {/* 이미지 정보 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedImage.category)}`}
                      >
                        {selectedImage.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        행사일: {formatDate(selectedImage.eventDate)}
                      </div>
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 mr-2" />
                        촬영: {selectedImage.photographer}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        조회수: {selectedImage.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        좋아요: {selectedImage.likes}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

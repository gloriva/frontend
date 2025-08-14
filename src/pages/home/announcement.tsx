import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Eye, Tag, Star, Search, Filter } from "lucide-react";
// import { lumi } from "../lib/lumi";
import toast from "react-hot-toast";

interface Announcement {
  _id: string;
  title: string;
  content: string;
  category: string;
  isImportant: boolean;
  imageUrl?: string;
  author: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);

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

  const categories = ["전체", "일반", "예배", "교육", "행사", "긴급"];

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.announcements.list();
      // setAnnouncements(list || []);
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

      {/* 검색 및 필터 */}
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    onClick={() => setSelectedCategory(category)}
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

      {/* 공지사항 목록 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAnnouncements.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {filteredAnnouncements.map((announcement) => (
                <motion.div
                  key={announcement._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  variants={fadeInUp}
                  onClick={() => setSelectedAnnouncement(announcement)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {announcement.isImportant && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              중요
                            </span>
                          )}
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(announcement.category)}`}
                          >
                            <Tag className="h-3 w-3 mr-1 inline" />
                            {announcement.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-4">
                          {announcement.content}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(announcement.createdAt)}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {announcement.views}
                          </div>
                          <span>작성자: {announcement.author}</span>
                        </div>
                      </div>
                      {announcement.imageUrl && (
                        <img
                          src={announcement.imageUrl}
                          alt={announcement.title}
                          className="w-24 h-24 object-cover rounded-lg ml-6"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 공지사항 상세 모달 */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    {selectedAnnouncement.isImportant && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        중요
                      </span>
                    )}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedAnnouncement.category)}`}
                    >
                      <Tag className="h-3 w-3 mr-1 inline" />
                      {selectedAnnouncement.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedAnnouncement.title}
                  </h2>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(selectedAnnouncement.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedAnnouncement.views}
                    </div>
                    <span>작성자: {selectedAnnouncement.author}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAnnouncement(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {selectedAnnouncement.imageUrl && (
                <img
                  src={selectedAnnouncement.imageUrl}
                  alt={selectedAnnouncement.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedAnnouncement.content}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedAnnouncement(null)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Announcements;

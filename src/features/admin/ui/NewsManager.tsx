import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  User,
  Tag,
  Newspaper,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { RichEditor } from "@/features/admin/ui/RichEditor";
import toast from "react-hot-toast";

interface ChurchNews {
  _id: string;
  title: string;
  content: string;
  summary?: string;
  category: string;
  status: "draft" | "published" | "archived";
  imageUrl?: string;
  tags: string[];
  author: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

const churchNews: ChurchNews[] = [
  {
    _id: "1",
    title: "창립 기념 행사",
    content: "교회 창립 기념 행사가 열립니다. 많은 참여 부탁드립니다.",
    summary: "창립 기념 행사 안내",
    category: "행사",
    status: "published",
    imageUrl: "https://example.com/image1.jpg",
    tags: ["창립", "기념", "행사"],
    author: "홍길동",
    publishedAt: "2025-08-01T14:00:00Z",
    createdAt: "2025-07-30T14:00:00Z",
    updatedAt: "2025-08-01T14:00:00Z",
  },
  {
    _id: "2",
    title: "여름 성경학교",
    content: "다음 주부터 여름 성경학교가 시작됩니다.",
    category: "교육",
    status: "draft",
    tags: ["성경학교", "교육"],
    author: "이영희",
    createdAt: "2025-07-20T09:00:00Z",
    updatedAt: "2025-08-02T14:22:00Z",
  },
  {
    _id: "3",
    title: "선교 보고",
    content: "지난 한 달 동안의 해외 선교 활동을 보고합니다.",
    summary: "선교 활동 결과 보고",
    category: "선교",
    status: "published",
    imageUrl: "https://example.com/image2.jpg",
    tags: ["선교", "보고"],
    author: "김철수",
    publishedAt: "2025-08-05T17:00:00Z",
    createdAt: "2025-06-15T17:00:00Z",
    updatedAt: "2025-08-01T17:00:00Z",
  },
  {
    _id: "4",
    title: "추수감사절 행사 안내",
    content: "추수감사절 행사가 예정되어 있습니다. 많은 참석 부탁드립니다.",
    summary: "추수감사절 행사 일정",
    category: "행사",
    status: "draft",
    imageUrl: "https://example.com/image3.jpg",
    tags: ["추수감사절", "행사"],
    author: "박민수",
    createdAt: "2025-07-25T12:00:00Z",
    updatedAt: "2025-07-30T12:30:00Z",
  },
  {
    _id: "5",
    title: "지역 사회 봉사 활동",
    content: "이번 주말에 진행될 봉사 활동에 많은 참여 바랍니다.",
    summary: "봉사 활동 안내",
    category: "봉사",
    status: "published",
    imageUrl: "https://example.com/image4.jpg",
    tags: ["봉사", "사회"],
    author: "최지희",
    publishedAt: "2025-08-10T09:30:00Z",
    createdAt: "2025-08-01T09:00:00Z",
    updatedAt: "2025-08-05T09:30:00Z",
  },
];

export const NewsManager: React.FC = () => {
  const [news, setNews] = useState<ChurchNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<ChurchNews | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    category: "ministry",
    status: "draft",
    imageUrl: "",
    tags: [] as string[],
    tagInput: "",
  });

  const categoryOptions = [
    { value: "ministry", label: "사역" },
    { value: "event", label: "행사" },
    { value: "mission", label: "선교" },
    { value: "education", label: "교육" },
    { value: "fellowship", label: "교제" },
    { value: "others", label: "기타" },
  ];

  const fetchNews = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.church_news.list();
      setNews(churchNews || []);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      toast.error("교회 소식을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCreate = () => {
    setEditingNews(null);
    setFormData({
      title: "",
      content: "",
      summary: "",
      category: "ministry",
      status: "draft",
      imageUrl: "",
      tags: [],
      tagInput: "",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (newsItem: ChurchNews) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      summary: newsItem.summary || "",
      category: newsItem.category,
      status: newsItem.status,
      imageUrl: newsItem.imageUrl || "",
      tags: newsItem.tags || [],
      tagInput: "",
    });
    setIsModalOpen(true);
  };

  const handleAddTag = () => {
    if (
      formData.tagInput.trim() &&
      !formData.tags.includes(formData.tagInput.trim())
    ) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.tagInput.trim()],
        tagInput: "",
      });
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const newsData = {
      //   title: formData.title,
      //   content: formData.content,
      //   summary: formData.summary,
      //   category: formData.category,
      //   status: formData.status,
      //   imageUrl: formData.imageUrl,
      //   tags: formData.tags,
      //   author: "관리자",
      //   ...(formData.status === "published" && !editingNews?.publishedAt
      //     ? {
      //         publishedAt: new Date().toISOString(),
      //       }
      //     : {}),
      //   ...(editingNews ? {} : { createdAt: new Date().toISOString() }),
      //   updatedAt: new Date().toISOString(),
      // };

      if (editingNews) {
        // await lumi.entities.church_news.update(editingNews._id, newsData);
        toast.success("교회 소식이 수정되었습니다");
      } else {
        // await lumi.entities.church_news.create(newsData);
        toast.success("교회 소식이 생성되었습니다");
      }

      setIsModalOpen(false);
      fetchNews();
    } catch (error) {
      console.error("Failed to save news:", error);
      toast.error("교회 소식 저장에 실패했습니다");
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.church_news.delete(id);
      toast.success("교회 소식이 삭제되었습니다");
      fetchNews();
    } catch (error) {
      console.error("Failed to delete news:", error);
      toast.error("교회 소식 삭제에 실패했습니다");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "발행됨";
      case "draft":
        return "임시저장";
      case "archived":
        return "보관됨";
      default:
        return status;
    }
  };

  const getCategoryLabel = (category: string) => {
    const cat = categoryOptions.find((c) => c.value === category);
    return cat ? cat.label : category;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">교회 소식 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 소식 작성
          </Button>
        </div>
      </div>

      <div className="p-6">
        {news.length === 0 ? (
          <div className="text-center py-12">
            <Newspaper className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">등록된 교회 소식이 없습니다</p>
            {/* <Button onClick={handleCreate} className="mt-4">
              첫 소식 작성하기
            </Button> */}
          </div>
        ) : (
          <div className="space-y-4">
            {news.map((newsItem) => (
              <motion.div
                key={newsItem._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {newsItem.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(newsItem.status)}`}
                      >
                        {getStatusText(newsItem.status)}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {getCategoryLabel(newsItem.category)}
                      </span>
                    </div>
                    {newsItem.summary && (
                      <p className="text-gray-600 mb-3">{newsItem.summary}</p>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {newsItem.author}
                      </div>
                      {newsItem.publishedAt && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(newsItem.publishedAt).toLocaleDateString(
                            "ko-KR",
                          )}
                        </div>
                      )}
                    </div>
                    {newsItem.tags && newsItem.tags.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <div className="flex flex-wrap gap-1">
                          {newsItem.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {newsItem.imageUrl && (
                    <img
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                      className="w-20 h-20 object-cover rounded-lg ml-4"
                    />
                  )}
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(newsItem)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="수정"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(newsItem._id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* 교회 소식 작성/수정 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingNews ? "교회 소식 수정" : "새 교회 소식 작성"}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                제목 *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="소식 제목을 입력하세요"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카테고리 *
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                {categoryOptions.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상태
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="draft">임시저장</option>
                <option value="published">발행</option>
                <option value="archived">보관</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                대표 이미지 URL
              </label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              요약
            </label>
            <textarea
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="소식의 간단한 요약을 입력하세요"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              태그
            </label>
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={formData.tagInput}
                onChange={(e) =>
                  setFormData({ ...formData, tagInput: e.target.value })
                }
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddTag())
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="태그를 입력하고 Enter 또는 추가 버튼을 클릭하세요"
              />
              <Button type="button" onClick={handleAddTag} size="sm">
                추가
              </Button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              내용 *
            </label>
            <RichEditor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              placeholder="교회 소식 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
              height="400px"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              취소
            </Button>
            <Button type="submit">{editingNews ? "수정" : "저장"}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewsManager;

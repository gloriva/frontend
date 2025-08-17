import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  Star,
  Bell,
} from "lucide-react";
// import { lumi } from "../../../../lib/lumi";
import { Button } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { RichEditor } from "@/features/admin/ui/RichEditor";
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

const announcementsData: Announcement[] = [
  {
    _id: "1",
    title: "주의 사항: 안전 수칙",
    content: "교회 내 안전 수칙을 다시 한번 숙지해 주세요.",
    category: "공지",
    isImportant: true,
    imageUrl: "https://example.com/announcement1.jpg",
    author: "유재석",
    views: 300,
    createdAt: "2025-08-01T10:00:00Z",
    updatedAt: "2025-08-05T11:00:00Z",
  },
  {
    _id: "2",
    title: "예배시간 변경 안내",
    content: "여름 시즌 동안 예배 시간이 임시로 변경됩니다.",
    category: "시간",
    isImportant: false,
    author: "강호동",
    views: 450,
    createdAt: "2025-07-20T08:30:00Z",
    updatedAt: "2025-07-25T09:00:00Z",
  },
  {
    _id: "3",
    title: "청년부 모임 장소 변경",
    content:
      "이번 청년부 모임 장소가 변경되었습니다. 새로운 장소는 아래와 같습니다.",
    category: "모임",
    isImportant: true,
    author: "신동엽",
    views: 200,
    createdAt: "2025-08-10T14:00:00Z",
    updatedAt: "2025-08-12T14:30:00Z",
  },
  {
    _id: "4",
    title: "헌금 안내",
    content: "온라인 헌금 방법에 대해 알려드립니다.",
    category: "헌금",
    isImportant: false,
    imageUrl: "https://example.com/announcement2.jpg",
    author: "박명수",
    views: 380,
    createdAt: "2025-08-15T12:00:00Z",
    updatedAt: "2025-08-16T13:00:00Z",
  },
  {
    _id: "5",
    title: "교회 청소 자원 모집",
    content: "이번 달 교회 청소 자원자를 모집합니다.",
    category: "봉사",
    isImportant: false,
    author: "정형돈",
    views: 150,
    createdAt: "2025-08-05T09:00:00Z",
    updatedAt: "2025-08-06T09:30:00Z",
  },
];

export const NoticeManager = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] =
    useState<Announcement | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "일반",
    isImportant: false,
    imageUrl: "",
  });

  const categoryOptions = ["일반", "예배", "교육", "행사", "긴급"];

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.announcements.list();
      setAnnouncements(announcementsData || []);
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

  const handleCreate = () => {
    setEditingAnnouncement(null);
    setFormData({
      title: "",
      content: "",
      category: "일반",
      isImportant: false,
      imageUrl: "",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      category: announcement.category,
      isImportant: announcement.isImportant,
      imageUrl: announcement.imageUrl || "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const announcementData = {
      //   ...formData,
      //   author: "관리자",
      //   views: editingAnnouncement?.views || 0,
      //   ...(editingAnnouncement ? {} : { createdAt: new Date().toISOString() }),
      //   updatedAt: new Date().toISOString(),
      // };

      if (editingAnnouncement) {
        // await lumi.entities.announcements.update(
        //   editingAnnouncement._id,
        //   announcementData,
        // );
        toast.success("공지사항이 수정되었습니다");
      } else {
        // await lumi.entities.announcements.create(announcementData);
        toast.success("공지사항이 생성되었습니다");
      }

      setIsModalOpen(false);
      fetchAnnouncements();
    } catch (error) {
      console.error("Failed to save announcement:", error);
      toast.error("공지사항 저장에 실패했습니다");
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.announcements.delete(id);
      toast.success("공지사항이 삭제되었습니다");
      fetchAnnouncements();
    } catch (error) {
      console.error("Failed to delete announcement:", error);
      toast.error("공지사항 삭제에 실패했습니다");
    }
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
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
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
          <h2 className="text-xl font-bold text-gray-900">공지사항 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 공지사항 작성
          </Button>
        </div>
      </div>

      <div className="p-6">
        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">등록된 공지사항이 없습니다</p>
            {/* <Button onClick={handleCreate} className="mt-4">
              첫 공지사항 작성하기
            </Button> */}
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <motion.div
                key={announcement._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between">
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
                        {announcement.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {announcement.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {announcement.content.replace(/<[^>]*>/g, "")}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {announcement.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(announcement.createdAt).toLocaleDateString(
                          "ko-KR",
                        )}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {announcement.views}
                      </div>
                    </div>
                  </div>
                  {announcement.imageUrl && (
                    <img
                      src={announcement.imageUrl}
                      alt={announcement.title}
                      className="w-20 h-20 object-cover rounded-lg ml-4"
                    />
                  )}
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(announcement)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="수정"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(announcement._id)}
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

      {/* 공지사항 작성/수정 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAnnouncement ? "공지사항 수정" : "새 공지사항 작성"}
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
                placeholder="공지사항 제목을 입력하세요"
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
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이미지 URL
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

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isImportant"
              checked={formData.isImportant}
              onChange={(e) =>
                setFormData({ ...formData, isImportant: e.target.checked })
              }
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="isImportant" className="ml-2 text-sm text-gray-700">
              중요 공지사항 (상단에 고정 표시됩니다)
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              내용 *
            </label>
            <RichEditor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              placeholder="공지사항 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
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
            <Button type="submit">
              {editingAnnouncement ? "수정" : "저장"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NoticeManager;

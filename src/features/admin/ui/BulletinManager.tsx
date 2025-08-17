import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Calendar, User, FileText } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { RichEditor } from "@/features/admin/ui/RichEditor";
import toast from "react-hot-toast";

interface Bulletin {
  _id: string;
  title: string;
  date: string;
  content: string;
  status: "draft" | "published" | "archived";
  author: string;
  createdAt: string;
  updatedAt: string;
}

const bulletinsData: Bulletin[] = [
  {
    _id: "1",
    title: "창립 기념 주일",
    date: "2025-08-17",
    content: "교회 창립 기념 주일 예배를 드립니다. 함께해 주시기 바랍니다.",
    status: "published",
    author: "홍길동",
    createdAt: "2025-07-30T10:30:00Z",
    updatedAt: "2025-08-01T12:45:00Z",
  },
  {
    _id: "2",
    title: "여름 성경학교 안내",
    date: "2025-08-19",
    content: "주일학교 여름 성경학교가 시작됩니다. 많은 참여 바랍니다.",
    status: "draft",
    author: "이영희",
    createdAt: "2025-07-20T09:00:00Z",
    updatedAt: "2025-08-02T14:22:00Z",
  },
  {
    _id: "3",
    title: "지역 봉사 활동 보고",
    date: "2025-08-20",
    content: "지속적인 지역 봉사 활동에 감사드립니다. 다음 주 일정 안내입니다.",
    status: "published",
    author: "김철수",
    createdAt: "2025-06-15T11:15:00Z",
    updatedAt: "2025-07-25T16:30:00Z",
  },
  {
    _id: "4",
    title: "추수감사절 준비 모임",
    date: "2025-08-28",
    content:
      "추수감사절 준비 모임이 예정되어 있습니다. 많은 참석 부탁드립니다.",
    status: "draft",
    author: "박민수",
    createdAt: "2025-07-29T10:00:00Z",
    updatedAt: "2025-08-03T09:45:00Z",
  },
  {
    _id: "5",
    title: "선교 보고",
    date: "2025-08-29",
    content: "최근 선교 활동 보고 및 감사의 말씀 전합니다.",
    status: "archived",
    author: "최지희",
    createdAt: "2025-05-10T08:50:00Z",
    updatedAt: "2025-06-13T11:05:00Z",
  },
];

export const BulletinManager: React.FC = () => {
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBulletin, setEditingBulletin] = useState<Bulletin | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
    status: "draft",
  });

  const fetchBulletins = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.bulletins.list();
      // setBulletins(bulletins || [])
      setBulletins(bulletinsData);
    } catch (error) {
      console.error("Failed to fetch bulletins:", error);
      toast.error("주보 목록을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBulletins();
  }, []);

  const handleCreate = () => {
    setEditingBulletin(null);
    setFormData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      content: "",
      status: "draft",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (bulletin: Bulletin) => {
    setEditingBulletin(bulletin);
    setFormData({
      title: bulletin.title,
      date: bulletin.date.split("T")[0],
      content: bulletin.content,
      status: bulletin.status,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const bulletinData = {
      //   ...formData,
      //   date: new Date(formData.date).toISOString(),
      //   author: "관리자",
      //   ...(editingBulletin ? {} : { createdAt: new Date().toISOString() }),
      //   updatedAt: new Date().toISOString(),
      // };

      if (editingBulletin) {
        // await lumi.entities.bulletins.update(editingBulletin._id, bulletinData);
        toast.success("주보가 수정되었습니다");
      } else {
        // await lumi.entities.bulletins.create(bulletinData);
        toast.success("주보가 생성되었습니다");
      }

      setIsModalOpen(false);
      fetchBulletins();
    } catch (error) {
      console.error("Failed to save bulletin:", error);
      toast.error("주보 저장에 실패했습니다");
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.bulletins.delete(id);
      toast.success("주보가 삭제되었습니다");
      fetchBulletins();
    } catch (error) {
      console.error("Failed to delete bulletin:", error);
      toast.error("주보 삭제에 실패했습니다");
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
          <h2 className="text-xl font-bold text-gray-900">주보 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 주보 작성
          </Button>
        </div>
      </div>

      <div className="p-6 overflow-auto">
        {bulletins.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">등록된 주보가 없습니다</p>
            {/* <Button onClick={handleCreate} className="mt-4">
              첫 주보 작성하기
            </Button> */}
          </div>
        ) : (
          <div className="space-y-4">
            {bulletins.map((bulletin, i) => (
              <motion.div
                key={i}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {bulletin.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(bulletin.status)}`}
                      >
                        {getStatusText(bulletin.status)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(bulletin.date).toLocaleDateString("ko-KR")}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {bulletin.author}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(bulletin)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="수정"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(bulletin._id)}
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

      {/* 주보 작성/수정 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingBulletin ? "주보 수정" : "새 주보 작성"}
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
                placeholder="주보 제목을 입력하세요"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                날짜 *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

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
              내용 *
            </label>
            <RichEditor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              placeholder="주보 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
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
            <Button type="submit">{editingBulletin ? "수정" : "저장"}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BulletinManager;

import { CATEGORY_COLORS } from "@/features/admin/constants/NoticeManager";
import { useNoticeManagerStore } from "../store/NoticeManager";
import type { Announcement } from "@/entities/admin/NoticeManager";
import { useCommonStore } from "../store/common";
import toast from "react-hot-toast";

export const getCategoryColor = (category: string) => {
  return CATEGORY_COLORS[category] || "bg-gray-100 text-gray-600";
};

export function useNoticeHandlers() {
  const setFormData = useNoticeManagerStore((state) => state.setFormData);
  const formData = useNoticeManagerStore((state) => state.formData);
  const setForm = useNoticeManagerStore((state) => state.setFormData);
  const setIsOpen = useCommonStore((state) => state.handleModal);

  const handleNoticeData = (type: string, content?: string | boolean) => {
    if (type === "isImportant") {
      const current = formData.isImportant;
      setFormData({ ...formData, isImportant: !current });
    } else {
      setFormData({ ...formData, [type]: content });
    }
  };

  const handleCreate = () => {
    setForm({
      title: "",
      content: "",
      category: "일반",
      isImportant: false,
      imageUrl: "",
    });
    setIsOpen();
  };

  const handleEdit = (announcement: Announcement) => {
    setForm({
      title: announcement.title,
      content: announcement.content,
      category: announcement.category,
      isImportant: announcement.isImportant,
      imageUrl: announcement.imageUrl || "",
    });
    setIsOpen();
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      // await lumi.entities.announcements.delete(id);
      toast.success("공지사항이 삭제되었습니다");
    } catch (error) {
      console.error("Failed to delete announcement:", error);
      toast.error("공지사항 삭제에 실패했습니다");
    }
  };

  return { handleCreate, handleEdit, handleDelete, handleNoticeData };
}

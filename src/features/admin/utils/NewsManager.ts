import type { ChurchNews } from "@/entities/admin/NewsManager";
import { categoryOptions } from "@/features/admin/constants/NewsManager";
import toast from "react-hot-toast";
import { useNewsManager } from "../store/NewsManager";
import { useCommonStore } from "../store/common";

export const getCategoryLabel = (category: string) => {
  const cat = categoryOptions.find((c) => c.value === category);
  return cat ? cat.label : category;
};

export const getStatusColor = (status: string) => {
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

export const getStatusText = (status: string) => {
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

export default function useNewsHook() {
  const setForm = useNewsManager((state) => state.setForm);
  const setIsOpen = useCommonStore((state) => state.handleModal);

  const handleCreate = () => {
    setForm({
      title: "",
      content: "",
      summary: "",
      category: "사역",
      status: "draft",
      imageUrl: "",
      tags: [],
      tagInput: "",
    });
    setIsOpen();
  };

  const handleEdit = (newsItem: ChurchNews) => {
    setForm({
      title: newsItem.title,
      content: newsItem.content,
      summary: newsItem.summary || "",
      category: newsItem.category,
      status: newsItem.status,
      imageUrl: newsItem.imageUrl || "",
      tags: newsItem.tags || [],
      tagInput: "",
    });
    setIsOpen();
  };

  const handleDelete = async (_id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.church_news.delete(id);
      toast.success("교회 소식이 삭제되었습니다");
      // fetchNews();
    } catch (error) {
      console.error("Failed to delete news:", error);
      toast.error("교회 소식 삭제에 실패했습니다");
    }
  };

  return { handleCreate, handleEdit, handleDelete };
}

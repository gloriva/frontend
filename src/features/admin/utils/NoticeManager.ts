import { CATEGORY_COLORS } from "@/features/admin/constants/NoticeManager";
import { useNoticeManagerStore } from "../store/NoticeManager";

export const getCategoryColor = (category: string) => {
  return CATEGORY_COLORS[category] || "bg-gray-100 text-gray-600";
};

export function useNoticeHandlers() {
  const setFormData = useNoticeManagerStore((state) => state.setFormData);
  const formData = useNoticeManagerStore((state) => state.formData);

  const handleNoticeData = (type: string, content?: string | boolean) => {
    if (type === "isImportant") {
      const current = formData.isImportant;
      setFormData({ ...formData, isImportant: !current });
    } else {
      setFormData({ ...formData, [type]: content });
    }
  };

  return { handleNoticeData };
}

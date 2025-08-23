import { categoryOptions } from "@/features/admin/constants/NewsManager";

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

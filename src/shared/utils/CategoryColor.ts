export const getCategoryColor = (category: string) => {
  const colors = {
    예배: "bg-blue-100 text-blue-600",
    교육: "bg-green-100 text-green-600",
    행사: "bg-purple-100 text-purple-600",
    봉사: "bg-orange-100 text-orange-600",
    기타: "bg-gray-100 text-gray-600",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600";
};

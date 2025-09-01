import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { useNoticeHandlers } from "@/features/admin/utils/NoticeManager";
import { categoryOptions } from "@/features/admin/constants/NoticeManager";

export default function NoticeCategory() {
  const category = useNoticeManagerStore((state) => state.formData.category);
  const { handleNoticeData } = useNoticeHandlers();
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        카테고리 *
      </label>
      <select
        value={category}
        onChange={(e) => handleNoticeData("category", e.target.value)}
        className={`w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 transition-all duration-200 ease-in-out hover:rounded-b-none hover:shadow-lg`}
        required
      >
        {categoryOptions.map((category) => (
          <option
            key={category}
            value={category}
            className="border border-gray-300"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

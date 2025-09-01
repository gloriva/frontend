import { categoryOptions } from "@/features/admin/constants/NewsManager";
import { useNewsManager } from "@/features/admin/store/NewsManager";

export default function NewsCategory() {
  const category = useNewsManager((state) => state.form.category);
  const updateForm = useNewsManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        카테고리 *
      </label>
      <select
        value={category}
        onChange={(e) => {
          updateForm("category", e.target.value);
        }}
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 transition-all duration-200 ease-in-out focus:rounded-b-none focus:shadow-lg focus:ring-1 focus:ring-blue-500`}
        required
      >
        {categoryOptions.map((category) => (
          <option key={category.value} value={category.label}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

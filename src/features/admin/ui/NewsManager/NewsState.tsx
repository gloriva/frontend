import { useNewsManager } from "@/features/admin/store/NewsManager";
export default function NewsState() {
  const status = useNewsManager((state) => state.form.status);
  const updateForm = useNewsManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        상태
      </label>
      <select
        value={status}
        onChange={(e) => updateForm("status", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 transition-all duration-200 ease-in-out focus:rounded-b-none focus:shadow-lg focus:ring-1 focus:ring-blue-500`}
      >
        <option value="draft">임시저장</option>
        <option value="published">발행</option>
        <option value="archived">보관</option>
      </select>
    </div>
  );
}

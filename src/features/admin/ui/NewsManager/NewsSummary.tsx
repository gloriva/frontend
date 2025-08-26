import { useNewsManager } from "@/features/admin/store/NewsManager";

export default function NewsSummary() {
  const summary = useNewsManager((state) => state.form.summary);
  const updateForm = useNewsManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        요약
      </label>
      <textarea
        value={summary}
        onChange={(e) => updateForm("summary", e.target.value)}
        rows={2}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:shadow-lg focus:ring-2 focus:ring-blue-500`}
        placeholder="소식의 간단한 요약을 입력하세요"
      />
    </div>
  );
}

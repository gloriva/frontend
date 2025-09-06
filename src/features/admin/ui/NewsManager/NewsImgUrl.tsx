import { useNewsManager } from "@/features/admin/store/NewsManager";

export default function NewsImgUrl() {
  const imageUrl = useNewsManager((state) => state.form.imageUrl);
  const updateForm = useNewsManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        대표 이미지 URL
      </label>
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => updateForm("imageUrl", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:shadow-lg focus:ring-2 focus:ring-blue-500`}
        placeholder="https://example.com/image.jpg"
      />
    </div>
  );
}

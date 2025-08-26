import { useBulletinManager } from "@/features/admin/store/BulletinManager";

export default function BulletinTitle() {
  const title = useBulletinManager((state) => state.form.title);
  const updateForm = useBulletinManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        제목 *
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => updateForm("title", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
        placeholder="주보 제목을 입력하세요"
        required
      />
    </div>
  );
}

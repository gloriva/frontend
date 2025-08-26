import { useBulletinManager } from "../../store/BulletinManager";

export default function BulletinState() {
  const status = useBulletinManager((state) => state.form.status);
  const updateForm = useBulletinManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        상태
      </label>
      <select
        value={status}
        onChange={(e) => updateForm("status", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
      >
        <option value="draft">임시저장</option>
        <option value="published">발행</option>
        <option value="archived">보관</option>
      </select>
    </div>
  );
}

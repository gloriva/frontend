import { useBulletinManager } from "@/features/admin/store/BulletinManager";
export default function BulletinDate() {
  const date = useBulletinManager((state) => state.form.date);
  const updateForm = useBulletinManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        날짜 *
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => updateForm("date", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
        required
      />
    </div>
  );
}

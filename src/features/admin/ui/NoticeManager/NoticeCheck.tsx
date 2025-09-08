import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { useNoticeHandlers } from "@/features/admin/utils/NoticeManager";

export default function NoticeCheck() {
  const isImportant = useNoticeManagerStore(
    (state) => state.formData.isImportant,
  );
  const { handleNoticeData } = useNoticeHandlers();
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="isImportant"
        checked={isImportant}
        onChange={(e) => handleNoticeData("isImportant", e.target.checked)}
        className={`h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500`}
      />
      <label htmlFor="isImportant" className="ml-2 text-sm text-gray-700">
        중요 공지사항 (상단에 고정 표시됩니다)
      </label>
    </div>
  );
}

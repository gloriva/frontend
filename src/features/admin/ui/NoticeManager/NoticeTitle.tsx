import { useNoticeHandlers } from "@/features/admin/utils/NoticeManager";
import { useNoticeManagerStore } from "../../store/NoticeManager";

export default function NoticeTitle() {
  const title = useNoticeManagerStore((state) => state.formData.title);
  const { handleNoticeData } = useNoticeHandlers();
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        제목 *
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => handleNoticeData("title", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
        placeholder="공지사항 제목을 입력하세요"
        required
      />
    </div>
  );
}

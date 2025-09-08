import { useNoticeManagerStore } from "../../store/NoticeManager";
import { useNoticeHandlers } from "../../utils/NoticeManager";

export default function NoticeImgUrl() {
  const imageUrl = useNoticeManagerStore((state) => state.formData.imageUrl);
  const { handleNoticeData } = useNoticeHandlers();
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        이미지 URL
      </label>
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => handleNoticeData("imageUrl", e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
        placeholder="https://example.com/image.jpg"
      />
    </div>
  );
}

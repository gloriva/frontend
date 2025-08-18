import RichEditor from "@/features/admin/ui/common/RichEditor";
import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { useNoticeHandlers } from "@/features/admin/utils/NoticeManager";

export default function ContentSection() {
  const content = useNoticeManagerStore((state) => state.formData.content);
  const { handleNoticeData } = useNoticeHandlers();
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        내용 *
      </label>
      <RichEditor
        value={content}
        onChange={(content) => handleNoticeData("content", content)}
        placeholder="공지사항 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
        height="400px"
      />
    </div>
  );
}

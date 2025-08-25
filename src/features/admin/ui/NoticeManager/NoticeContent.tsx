import RichEditor from "../common/RichEditor";
import { useNoticeManagerStore } from "../../store/NoticeManager";

export default function NoticeContent() {
  const content = useNoticeManagerStore((state) => state.formData.content);
  const setForm = useNoticeManagerStore((state) => state.updateField);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        내용 *
      </label>
      <RichEditor
        value={content}
        onChange={(content) => setForm("content", content)}
        placeholder="공지사항 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
        height="400px"
      />
    </div>
  );
}

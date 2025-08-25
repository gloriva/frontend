import RichEditor from "@/features/admin/ui/common/RichEditor";
import { useNewsManager } from "@/features/admin/store/NewsManager";

export default function NewsContent() {
  const content = useNewsManager((state) => state.form.content);
  const updateForm = useNewsManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        내용 *
      </label>
      <RichEditor
        value={content}
        onChange={(content) => updateForm("content", content)}
        placeholder="교회 소식 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
        height="400px"
      />
    </div>
  );
}

import RichEditor from "@/features/admin/ui/common/RichEditor";
import { useBulletinManager } from "../../store/BulletinManager";

export default function BulletinContent() {
  const content = useBulletinManager((state) => state.form.content);
  const updateForm = useBulletinManager((state) => state.updateForm);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        내용 *
      </label>
      <RichEditor
        value={content}
        onChange={(content: string) => updateForm("content", content)}
        placeholder="주보 내용을 입력하세요. 하이퍼링크를 추가하려면 텍스트를 선택한 후 링크 버튼을 클릭하세요."
        height="400px"
      />
    </div>
  );
}

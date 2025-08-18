import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { Button } from "@/shared/ui/Button";

export default function CancelButton() {
  const handleModal = useNoticeManagerStore((state) => state.handleModal);
  const title = useNoticeManagerStore((state) => state.formData.title);
  return (
    <div className="flex justify-end space-x-3 border-t border-gray-200 pt-10">
      <Button type="button" variant="secondary" onClick={handleModal}>
        취소
      </Button>
      <Button type="submit">{title.length > 0 ? "수정" : "저장"}</Button>
    </div>
  );
}

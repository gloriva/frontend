import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { Button } from "@/shared/ui/Button";
import { useCommonStore } from "@/features/admin/store/common";

export default function CancelButton() {
  const handleModal = useCommonStore((state) => state.handleModal);
  const title = useNoticeManagerStore((state) => state.formData.title);
  return (
    <div className="flex justify-end space-x-3 border-t border-gray-200 pt-10">
      <Button
        className="cursor-pointer"
        type="button"
        variant="secondary"
        onClick={handleModal}
      >
        취소
      </Button>
      <Button className="cursor-pointer" type="submit">
        {title.length > 0 ? "수정" : "저장"}
      </Button>
    </div>
  );
}

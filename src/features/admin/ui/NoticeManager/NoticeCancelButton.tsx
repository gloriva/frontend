import { Button } from "@/shared/ui/Button";
import { useCommonStore } from "@/features/admin/store/common";
import type { Announcement } from "@/entities/admin/NoticeManager";

export default function NoticeCancelButton({
  editingAnnouncement,
}: {
  editingAnnouncement: Announcement | null;
}) {
  const setIsOpen = useCommonStore((state) => state.onClose);
  return (
    <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
      <Button type="button" variant="secondary" onClick={() => setIsOpen()}>
        취소
      </Button>
      <Button type="submit">{editingAnnouncement ? "수정" : "저장"}</Button>
    </div>
  );
}

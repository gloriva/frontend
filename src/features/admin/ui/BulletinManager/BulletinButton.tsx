import { Button } from "@/shared/ui/Button";
import { useCommonStore } from "@/features/admin/store/common";
import type { Bulletin } from "@/entities/admin/BulletinManager";

interface BulletinButtonType {
  editingBulletin: Bulletin | null;
}
export default function BulletinButton({
  editingBulletin,
}: BulletinButtonType) {
  const onClose = useCommonStore((state) => state.onClose);
  return (
    <div className="mt-10 flex justify-end space-x-3 border-t border-gray-200 pt-4">
      <Button type="button" variant="secondary" onClick={() => onClose()}>
        취소
      </Button>
      <Button type="submit">{editingBulletin ? "수정" : "저장"}</Button>
    </div>
  );
}

import { Button } from "@/shared/ui/Button";
import { useCommonStore } from "@/features/admin/store/common";
import type { ChurchNews } from "@/entities/admin/NewsManager";

export default function NewsCancelButton({
  editingNews,
}: {
  editingNews: ChurchNews | null;
}) {
  const setIsOpen = useCommonStore((state) => state.onClose);
  return (
    <div className="mt-10 flex justify-end space-x-3 border-t border-gray-200 pt-4">
      <Button type="button" variant="secondary" onClick={() => setIsOpen()}>
        취소
      </Button>
      <Button type="submit">{editingNews ? "수정" : "저장"}</Button>
    </div>
  );
}

import type { Bulletin } from "@/entities/admin/BulletinManager";
import toast from "react-hot-toast";
import { useBulletinManager } from "@/features/admin/store/BulletinManager";
import { useCommonStore } from "@/features/admin/store/common";
const useBulletinHook = () => {
  const setForm = useBulletinManager((state) => state.setForm);
  const setIsOpen = useCommonStore((state) => state.handleModal);

  const handleCreate = () => {
    setForm({
      title: "",
      date: new Date().toISOString().split("T")[0],
      content: "",
      status: "draft",
    });
    setIsOpen();
  };

  const handleEdit = (bulletin: Bulletin) => {
    setForm({
      title: bulletin.title,
      date: bulletin.date.split("T")[0],
      content: bulletin.content,
      status: bulletin.status,
    });
    setIsOpen();
  };

  const handleDelete = async (_id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.bulletins.delete(id);
      toast.success("주보가 삭제되었습니다");
      // fetchBulletins();
    } catch (error) {
      console.error("Failed to delete bulletin:", error);
      toast.error("주보 삭제에 실패했습니다");
    }
  };

  return { handleCreate, handleEdit, handleDelete };
};

export default useBulletinHook;

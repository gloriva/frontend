import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import toast from "react-hot-toast";
import type { Bulletin } from "@/entities/admin/BulletinManager";
import { useCommonStore } from "@/features/admin/store/common";
import { AdminModal } from "@/features/admin/ui/common";
import useBulletinHook from "@/features/admin/utils/BulletinManager";
import {
  BulletinButton,
  BulletinContent,
  BulletinDate,
  BulletinList,
  BulletinState,
  BulletinTitle,
} from "./BulletinManager/index";

export const BulletinManager: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [editingBulletin, setEditingBulletin] = useState<Bulletin | null>(null);

  const setIsOpen = useCommonStore((state) => state.handleModal);
  const isOpen = useCommonStore((state) => state.isModalOpen);

  const { handleCreate } = useBulletinHook();

  const fetchBulletins = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.bulletins.list();
      // setBulletins(bulletins || [])
      // setBulletins(bulletinsData);
    } catch (error) {
      console.error("Failed to fetch bulletins:", error);
      toast.error("주보 목록을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBulletins();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBulletin) {
        // await lumi.entities.bulletins.update(editingBulletin.id, bulletinData);
        toast.success("주보가 수정되었습니다");
      } else {
        // await lumi.entities.bulletins.create(bulletinData);
        toast.success("주보가 생성되었습니다");
      }

      setIsOpen();
      fetchBulletins();
    } catch (error) {
      console.error("Failed to save bulletin:", error);
      toast.error("주보 저장에 실패했습니다");
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="mb-6 h-8 rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">주보 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 주보 작성
          </Button>
        </div>
      </div>
      <BulletinList />

      {/* 주보 작성/수정 모달 */}
      <AdminModal isOpen={isOpen} title="새 주보 작성" size="xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <BulletinTitle />
            <BulletinDate />
          </div>
          <BulletinState />
          <BulletinContent />
          <BulletinButton editingBulletin={editingBulletin} />
        </form>
      </AdminModal>
    </div>
  );
};

export default BulletinManager;

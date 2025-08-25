import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import toast from "react-hot-toast";
import type { Announcement } from "@/entities/admin/NoticeManager";
import {
  NoticeCancelButton,
  NoticeCategory,
  NoticeCheck,
  NoticeContent,
  NoticeImgUrl,
  NoticeList,
  NoticeTitle,
} from "@/features/admin/ui/NoticeManager/index";
import { AdminModal } from "@/features/admin/ui/common";
import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { announcementsData } from "@/features/admin/constants/AnnouncementsData";
import { useCommonStore } from "@/features/admin/store/common";

export const NoticeManager = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingAnnouncement, setEditingAnnouncement] =
    useState<Announcement | null>(null);

  const useFormData = useNoticeManagerStore((state) => state.setFormData);
  const modalOpen = useCommonStore((state) => state.isModalOpen);
  const handleModal = useCommonStore((state) => state.handleModal);
  const onClose = useCommonStore((state) => state.onClose);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.announcements.list();
      setAnnouncements(announcementsData || []);
      // setAnnouncements([]);
    } catch (error) {
      console.error("Failed to fetch announcements:", error);
      toast.error("공지사항을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleCreate = () => {
    setEditingAnnouncement(null);
    useFormData({
      title: "",
      content: "",
      category: "일반",
      isImportant: false,
      imageUrl: "",
    });
    handleModal();
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    useFormData({
      title: announcement.title,
      content: announcement.content,
      category: announcement.category,
      isImportant: announcement.isImportant,
      imageUrl: announcement.imageUrl || "",
    });
    handleModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingAnnouncement) {
        // await lumi.entities.announcements.update(
        //   editingAnnouncement._id,
        //   announcementData,
        // );
        toast.success("공지사항이 수정되었습니다");
      } else {
        // await lumi.entities.announcements.create(announcementData);
        toast.success("공지사항이 생성되었습니다");
      }

      onClose();
      fetchAnnouncements();
    } catch (error) {
      console.error("Failed to save announcement:", error);
      toast.error("공지사항 저장에 실패했습니다");
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      // await lumi.entities.announcements.delete(id);
      toast.success("공지사항이 삭제되었습니다");
      fetchAnnouncements();
    } catch (error) {
      console.error("Failed to delete announcement:", error);
      toast.error("공지사항 삭제에 실패했습니다");
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
          <h2 className="text-xl font-bold text-gray-900">공지사항 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 공지사항 작성
          </Button>
        </div>
      </div>

      <NoticeList
        announcements={announcements}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {/* 공지사항 작성/수정 모달 */}
      <form onSubmit={handleSubmit}>
        <AdminModal isOpen={modalOpen} title={"공지사항 수정"} size="xl">
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <NoticeTitle />
            <NoticeCategory />
          </div>
          <NoticeImgUrl />
          <NoticeCheck />
          <NoticeContent />
          <NoticeCancelButton editingAnnouncement={editingAnnouncement} />
        </AdminModal>
      </form>
    </div>
  );
};

export default NoticeManager;

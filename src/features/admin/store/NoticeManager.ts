import type { useNoticeManagerStoreType } from "@/entities/admin/NoticeManager";
import { create } from "zustand";
import { announcementsData } from "../constants/AnnouncementsData";

export const useNoticeManagerStore = create<useNoticeManagerStoreType>(
  (set) => ({
    announcements: announcementsData,
    formData: {
      title: "",
      content: "",
      category: "일반",
      isImportant: false,
      imageUrl: "",
    },

    setFormData: (newFormData) => set(() => ({ formData: newFormData })),
    toggleImportant: () =>
      set((state) => ({
        formData: {
          ...state.formData,
          isImportant: !state.formData.isImportant,
        },
      })),
    // 또는
    updateField: (type, content) =>
      set((state) => ({
        formData: { ...state.formData, [type]: content },
      })),
  }),
);

import type { useNoticeManagerStoreType } from "@/entities/admin/NoticeManager";
import { create } from "zustand";

export const useNoticeManagerStore = create<useNoticeManagerStoreType>(
  (set) => ({
    formData: {
      title: "",
      content: "",
      category: "일반",
      isImportant: false,
      imageUrl: "",
    },
    isModalOpen: false,
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
    onClose: () => set({ isModalOpen: false }),
    handleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  }),
);

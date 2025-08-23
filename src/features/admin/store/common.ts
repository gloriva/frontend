import type { ModalType } from "@/entities/admin/common/Modal";
import { create } from "zustand";

export const useCommonStore = create<ModalType>((set) => ({
  isModalOpen: false,
  onClose: () => set({ isModalOpen: false }),
  handleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

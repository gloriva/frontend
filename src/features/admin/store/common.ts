import type { AdminType } from "@/entities/admin/common/Admin";
import { create } from "zustand";

export const useCommonStore = create<AdminType>((set) => ({
  isModalOpen: false,
  onClose: () => set({ isModalOpen: false }),
  handleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  activeTab: "dashboard",
  changeTab: (tab) => set(() => ({ activeTab: tab })),
}));

import type { useBulletinManagerType } from "@/entities/admin/BulletinManager";
import { create } from "zustand";
import { bulletinsData } from "../constants/BulletinManager";

export const useBulletinManager = create<useBulletinManagerType>((set) => ({
  form: {
    id: 0,
    title: "",
    date: "",
    content: "",
    status: "draft",
    author: "",
    createdAt: "",
    updatedAt: "",
  },
  bulletins: bulletinsData,
  updateForm: (type, value) =>
    set((state) => ({ form: { ...state.form, [type]: value } })),
  // updateBulletin:(type, value) => set((state) => ({bulletins})),
  setForm: (newForm) =>
    set((state) => ({
      form: {
        ...state.form,
        title: newForm.title,
        date: newForm.date,
        content: newForm.content,
        status: newForm.status,
      },
    })),
}));

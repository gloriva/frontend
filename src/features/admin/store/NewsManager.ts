import type { useNewsManagerType } from "@/entities/admin/NewsManager";
import { create } from "zustand";
import { churchNews } from "@/features/admin/constants/NewsManager";

export const useNewsManager = create<useNewsManagerType>((set) => ({
  news: churchNews,
  form: {
    title: "",
    content: "",
    summary: "",
    category: "ministry",
    status: "draft",
    imageUrl: "",
    tags: [],
    tagInput: "",
  },
  setForm: (newForm) => set(() => ({ form: newForm })),
  updateForm: (type, value) =>
    set((state) => {
      if (type !== "tags") {
        return {
          form: {
            ...state.form,
            [type]: value,
          },
        };
      } else if (type === "tags") {
        return {
          form: {
            ...state.form,
            tags: [...state.form.tags, value],
          },
        };
      }

      return {};
    }),
  setNews: (newNewsData) => set(() => ({ news: newNewsData })),
  updateValue: (id, type, value) =>
    set((state) => ({
      news: state.news.map((n) => {
        if (n.id === id) {
          if (type !== "tags") {
            return { ...n, [type]: value };
          } else if (type === "tags") {
            return { ...n, tags: [...n.tags, value] };
          }
        }
        return n;
      }),
    })),
  removeTags: (tagToRemove) =>
    set((state) => {
      const filterTag = state.form.tags.filter((tag) => tag !== tagToRemove);

      return {
        form: {
          ...state.form,
          tags: filterTag,
        },
      };
    }),
  addTag: (tagToAdd) =>
    set((state) => {
      const { tagInput, tags } = state.form;
      if (tagInput && tagInput.trim() && !tags.includes(tagInput.trim())) {
        return {
          form: {
            ...state.form,
            tags: [...tags, tagToAdd],
            tagInput: "",
          },
        };
      }
      return {};
    }),
}));

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import toast from "react-hot-toast";
import type { ChurchNews } from "@/entities/admin/NewsManager";
import { useNewsManager } from "@/features/admin/store/NewsManager";
import {
  NewsCancelButton,
  NewsCategory,
  NewsContent,
  NewsImgUrl,
  NewsList,
  NewsState,
  NewsSummary,
  NewsTags,
  NewsTitle,
} from "./NewsManager/index";
import { AdminModal } from "./common";
import { useCommonStore } from "../store/common";

export const NewsManager = () => {
  const [loading, setLoading] = useState(true);
  const [editingNews, setEditingNews] = useState<ChurchNews | null>(null);

  // 이어서 컴포넌트 분리하기
  const setForm = useNewsManager((state) => state.setForm);
  const setIsOpen = useCommonStore((state) => state.handleModal);
  const isOpen = useCommonStore((state) => state.isModalOpen);

  const fetchNews = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.church_news.list();
      // setNews(churchNews || []);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      toast.error("교회 소식을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCreate = () => {
    setForm({
      title: "",
      content: "",
      summary: "",
      category: "사역",
      status: "draft",
      imageUrl: "",
      tags: [],
      tagInput: "",
    });
    setIsOpen();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingNews) {
        // await lumi.entities.church_news.update(editingNews.id, newsData);
        toast.success("교회 소식이 수정되었습니다");
      } else {
        // await lumi.entities.church_news.create(newsData);
        toast.success("교회 소식이 생성되었습니다");
      }

      // setIsOpen(false);
      // setIsModalOpen(false);
      fetchNews();
    } catch (error) {
      console.error("Failed to save news:", error);
      toast.error("교회 소식 저장에 실패했습니다");
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="mb-6 h-8 rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded bg-gray-200"></div>
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
          <h2 className="text-xl font-bold text-gray-900">교회 소식 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 소식 작성
          </Button>
        </div>
      </div>

      {/* 리스트 */}
      {/* zustand news 변수에 mockData가 대입되어 있음 */}
      <NewsList />

      {/* 교회 소식 작성/수정 모달 */}
      <AdminModal size="xl" isOpen={isOpen} title={"새 교회 소식 작성"}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <NewsTitle />
            <NewsCategory />
          </div>
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <NewsState />
            <NewsImgUrl />
          </div>
          <NewsSummary />
          <NewsTags />
          <NewsContent />
          <NewsCancelButton editingNews={editingNews} />
        </form>
      </AdminModal>
    </div>
  );
};

export default NewsManager;

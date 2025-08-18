import type { HeaderType } from "@/entities/admin/common/Header";
import { useNoticeManagerStore } from "@/features/admin/store/NoticeManager";
import { X } from "lucide-react";
import React from "react";

const Header = ({ title }: HeaderType) => {
  const handleModal = useNoticeManagerStore((state) => state.handleModal);
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>

      <button
        onClick={handleModal}
        className={`text-gray-400 transition-colors hover:text-gray-600`}
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
};

export default React.memo(Header);

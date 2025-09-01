import type { HeaderType } from "@/entities/admin/common/Header";
import { X } from "lucide-react";
import React from "react";
import { useCommonStore } from "@/features/admin/store/common";

const Header = ({ title }: HeaderType) => {
  const handleModal = useCommonStore((state) => state.handleModal);
  const open = useCommonStore((state) => state.isModalOpen);

  console.log("모달 핸들러: ", open);
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

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./AdminModal/index";
import { useCommonStore } from "@/features/admin/store/common";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}
export default function AdminModal({
  isOpen,
  title,
  children,
  size = "md",
}: ModalProps) {
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };
  const onClose = useCommonStore((state) => state.onClose);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* 배경 오버레이 */}
            <motion.div
              className="bg-opacity-50 fixed inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* 모달 컨텐츠 */}
            <motion.div
              className={`relative w-full ${sizeClasses[size]} rounded-xl bg-white shadow-xl`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* 헤더 */}
              <Header title={title} />

              {/* 컨텐츠 */}
              <div className="space-y-5 p-6">{children}</div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

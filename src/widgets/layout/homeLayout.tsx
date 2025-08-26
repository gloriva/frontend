import type React from "react";
import Header from "@/shared/ui/header";
import Footer from "@/shared/ui/footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      {/* 메인 콘텐츠 */}
      <main className="flex-1 space-y-6">{children}</main>
      <Footer />
    </div>
  );
}

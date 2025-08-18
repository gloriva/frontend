import {
  Bell,
  Calendar,
  FileText,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";

export const menuItems = [
  { id: "dashboard", label: "대시보드", icon: LayoutDashboard },
  { id: "bulletins", label: "주보 관리", icon: FileText },
  { id: "worship", label: "예배 일정", icon: Calendar },
  { id: "news", label: "교회 소식", icon: Newspaper },
  { id: "notice", label: "공지사항", icon: Bell },
];

import HomeLayout from "@/widgets/layout/homeLayout";
import { Outlet } from "react-router-dom";

export default function HomePageLayout() {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
}

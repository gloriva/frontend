import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import AboutPage from "@/pages/home/about";
import GalleryPage from "@/pages/home/gallery";
import WorshipPage from "@/pages/home/worship";
import HomePageLayout from "@/pages/home/layout";
import Landing from "@/pages/landingPage";
import MyPage from "@/pages/myPage";
import Announcements from "@/pages/home/announcement";
import Location from "@/pages/home/location";
import Admin from "@/pages/Admin";
import AuthPage from "@/pages/auth/ui/AuthPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/home/*" element={<HomePageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="worship" element={<WorshipPage />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="location" element={<Location />} />
    </Route>
    <Route path="/mypage" element={<MyPage />} />
  </Routes>
);

export default Router;

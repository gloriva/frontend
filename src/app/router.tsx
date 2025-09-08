import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import AboutPage from "@/pages/home/About";
import GalleryPage from "@/pages/home/Gallery";
import WorshipPage from "@/pages/home/Worship";
import HomePageLayout from "@/pages/home/Layout";
import Landing from "@/pages/LandingPage";
import MyPage from "@/pages/MyPage";
import Announcements from "@/pages/home/Announcement";
import Location from "@/pages/home/Location";
import Admin from "@/pages/Admin";

const Router = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
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

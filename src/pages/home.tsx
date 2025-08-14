import { HeroSection } from "@/widgets/ui/HeroSection";
import { WorshipSchedule } from "@/features/worship/ui/WorshipSchedule";
import { ChurchIntro } from "@/features/church/ui/ChurchIntro";
import { RecentNews } from "@/features/announcements/ui/RecentNews";
import { LocationInfo } from "@/features/location/ui/LocationInfo";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorshipSchedule />
      <ChurchIntro />
      <RecentNews />
      <LocationInfo />
    </div>
  );
};

export default Home;

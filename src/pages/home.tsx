import { HeroSection } from "@/features/churchInfo";
import { WorshipSchedule } from "@/features/churchInfo";
import { ChurchIntro } from "@/features/churchInfo";
import { RecentNews } from "@/features/notice";
import { LocationInfo } from "@/features/location";

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

import {
  DashboardHeader,
  DashboardRecentActivity,
  ElementsListUp,
} from "./DashboardDefault/index";

export default function DashboardDefault({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <ElementsListUp />
      <DashboardRecentActivity />
    </div>
  );
}

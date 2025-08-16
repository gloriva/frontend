import type { FilteredAnnouncements } from "./FilteredAnnouncements";

export interface NoticeListType {
  filteredAnnouncements: FilteredAnnouncements[];
  getCategoryColor: (category: string) => string;
  setSelectedAnnouncement: React.Dispatch<
    React.SetStateAction<FilteredAnnouncements | null>
  >;
  formatDate: (dateString: string) => string;
}

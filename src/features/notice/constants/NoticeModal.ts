import type { FilteredAnnouncements } from "@/entities/notice/FilteredAnnouncements";

export interface NoticeModalType {
  selectedAnnouncement: FilteredAnnouncements | null;
  getCategoryColor: (category: string) => string;
  formatDate: (dateString: string) => string;
  setSelectedAnnouncement: React.Dispatch<
    React.SetStateAction<FilteredAnnouncements | null>
  >;
}

import type { FilteredAnnouncements } from "@/entities/notice/type";

export interface NoticeModalType {
  selectedAnnouncement: FilteredAnnouncements | null;
  setSelectedAnnouncement: React.Dispatch<
    React.SetStateAction<FilteredAnnouncements | null>
  >;
}

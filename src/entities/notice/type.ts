export interface Notice {
  title: string;
  date: string;
  category: string;
  important: boolean;
}

export interface NoticeFilterType {
  searchTerm: string;
  handleInputChange: (sort: string, value: string) => void;
  selectedCategory: string;
}

export interface NoticeListType {
  filteredAnnouncements: FilteredAnnouncements[];
  setSelectedAnnouncement: React.Dispatch<
    React.SetStateAction<FilteredAnnouncements | null>
  >;
}

export interface FilteredAnnouncements {
  id: string;
  title: string;
  content: string;
  category: string;
  isImportant: boolean;
  imageUrl?: string;
  author: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

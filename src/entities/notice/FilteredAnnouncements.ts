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

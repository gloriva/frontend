import type { GalleryItem } from "./GalleryItem";

export interface GalleryGridType {
  filteredItems: GalleryItem[];
  setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
  getCategoryColor: (category: string) => string;
  formatDate: (dateString: string) => string;
}

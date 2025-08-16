import type { GalleryItem } from "./GalleryItem";

export interface GalleryModalType {
  selectedImage: GalleryItem | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
  getCategoryColor: (category: string) => string;
  formatDate: (dateString: string) => string;
}

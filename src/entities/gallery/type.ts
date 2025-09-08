export interface GalleryGridType {
  filteredItems: GalleryItem[];
  setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
}

export interface GalleryItem {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  photographer: string;
  eventDate: string;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryFilterType {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}

export interface GalleryModalType {
  selectedImage: GalleryItem | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
}

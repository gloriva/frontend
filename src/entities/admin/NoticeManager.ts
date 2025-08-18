export interface Announcement {
  _id: string;
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

export interface NoticeListType {
  announcements: Announcement[];
  handleEdit: (announcement: Announcement) => void;
  handleDelete: (_id: string) => Promise<void>;
}

interface formData {
  title: string;
  content: string;
  category: string;
  isImportant: boolean;
  imageUrl: string;
}

export interface useNoticeManagerStoreType {
  formData: formData;
  toggleImportant: () => void;
  updateField: (type: string, content: string) => void;
  setFormData: (newFormData: formData) => void;
  isModalOpen: boolean;
  onClose: () => void;
  handleModal: () => void;
}

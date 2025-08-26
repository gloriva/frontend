export interface ChurchNews {
  id: number;
  title: string;
  content: string;
  summary?: string;
  category: string;
  status: "draft" | "published" | "archived";
  imageUrl?: string;
  tags: string[];
  author: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  tagInput?: string;
}

export interface ChurchNewsForm {
  title: string;
  content: string;
  summary: string;
  category: string;
  status: "draft" | "published" | "archived";
  imageUrl: string;
  tags: string[];
  tagInput?: string;
}

export interface useNewsManagerType {
  news: ChurchNews[];
  setNews: (newNewsData: ChurchNews[]) => void;
  updateValue: (id: number, type: string, value: string) => void;
  form: ChurchNewsForm;
  setForm: (newForm: ChurchNewsForm) => void;
  updateForm: (type: string, value: string) => void;
  removeTags: (tagToRemove: string) => void;
  addTag: (tagToAdd: string) => void;
}

export interface NewsListType {
  handleEdit: (newsItem: ChurchNews) => void;
  handleDelete: (id: number) => Promise<void>;
}

export type StatusType = "draft" | "published" | "archived";

export interface Bulletin {
  id: number;
  title: string;
  date: string;
  content: string;
  status: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface formType {
  [key: string]: string;
}

export interface useBulletinManagerType {
  bulletins: Bulletin[];
  // updateBulletin: (type: string, value: string) => void;
  form: Bulletin;
  updateForm: (type: string, value: string) => void;
  setForm: (newForm: formType) => void;
}

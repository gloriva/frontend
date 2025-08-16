import type { EditFormType } from "./EditForm";

export interface UserInfoType {
  isEditing: boolean;
  handleEdit: () => void;
  handleSave: () => void;
  handleCancel: () => void;
  editForm: EditFormType;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  userInfo: EditFormType;
}

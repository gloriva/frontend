export interface AdminType {
  isModalOpen: boolean;
  onClose: () => void;
  handleModal: () => void;
  activeTab: string;
  changeTab: (tab: string) => void;
}

export interface AdminSideBarType {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  handleMenu: () => void;
  isOpen: boolean;
}

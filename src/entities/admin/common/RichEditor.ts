export interface RichEditorType {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
  className?: string;
}

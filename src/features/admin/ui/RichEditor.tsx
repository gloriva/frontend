import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface RichEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
  className?: string;
}

const ReactQuillLazy = lazy(() => import("react-quill-new"));

export const RichEditor: React.FC<RichEditorProps> = ({
  value,
  onChange,
  placeholder = "내용을 입력하세요...",
  height = "300px",
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // SSR 시 무시하고 클라이언트에서만 렌더링
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "indent",
    "align",
    "link",
    "image",
  ];

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className={`rich-editor ${className}`}>
        <ReactQuillLazy
          ref={quillRef}
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          style={{ height }}
        />
      </div>
    </Suspense>
  );
};

export default RichEditor;

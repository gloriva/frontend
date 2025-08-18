import type { RichEditorType } from "@/entities/admin/RichEditor";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { formats, modules } from "@/features/admin/constants/RichEditor";

const ReactQuillLazy = lazy(() => import("react-quill-new"));

export const RichEditor = ({
  value,
  onChange,
  placeholder = "내용을 입력하세요...",
  height = "300px",
  className = "",
}: RichEditorType) => {
  const [mounted, setMounted] = useState(false);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className={`rich-editor ${className} `}>
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

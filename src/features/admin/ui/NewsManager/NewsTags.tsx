import { Button } from "@/shared/ui/Button";
import { useNewsManager } from "@/features/admin/store/NewsManager";

export default function NewsTags() {
  const tags = useNewsManager((state) => state.form.tags);
  const tagInput = useNewsManager((state) => state.form.tagInput);
  const updateForm = useNewsManager((state) => state.updateForm);
  const addTag = useNewsManager((state) => state.addTag);
  const removeTags = useNewsManager((state) => state.removeTags);
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        태그
      </label>
      <div className="mb-2 flex items-center space-x-2">
        <input
          type="text"
          value={tagInput}
          onChange={(e) => updateForm("tagInput", e.target.value)}
          onKeyPress={(e) => {
            const trimmedInput = tagInput?.trim();
            if (!trimmedInput) return;

            e.key === "Enter" && (e.preventDefault(), addTag(trimmedInput));
          }}
          className={`flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500`}
          placeholder="태그를 입력하고 Enter 또는 추가 버튼을 클릭하세요"
        />
        <Button
          className="cursor-pointer"
          type="button"
          onClick={() => {
            const trimmedInput = tagInput?.trim();
            if (!trimmedInput) return;

            addTag(trimmedInput);
          }}
          size="sm"
        >
          추가
        </Button>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800`}
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTags(tag)}
                className={`ml-2 text-blue-600 hover:text-blue-800`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

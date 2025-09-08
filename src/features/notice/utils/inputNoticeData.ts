export function inputNoticeData(
  sort: string,
  value: string,
  setSearchTerm: (value: React.SetStateAction<string>) => void,
  setSelectedCategory: (value: React.SetStateAction<string>) => void,
) {
  switch (sort) {
    case "search":
      setSearchTerm(value);
      break;
    case "category":
      setSelectedCategory(value);
      break;
    default:
      break;
  }
}

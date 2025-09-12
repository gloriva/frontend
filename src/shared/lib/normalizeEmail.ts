export function normalizeEmail(raw: string) {
  if (!raw) return "";
  
  // 기본적인 정규화
  const normalized = String(raw)
    .trim()
    .toLowerCase();
  
  // 이메일 유효성 검사
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(normalized)) {
    throw new Error("유효하지 않은 이메일 형식입니다.");
  }

  return normalized;
}
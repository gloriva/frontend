export function normalizeSlug(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-") // 허용 외 문자 -> 하이픈
    .replace(/-+/g, "-") // 연속 하이픈 축약
    .replace(/^-|-$/g, "") // 앞뒤 하이픈 제거
    .slice(0, 9); // 길이 제한
}

export const RESERVED_SLUGS = new Set([
  "admin",
  "api",
  "auth",
  "login",
  "logout",
  "signup",
  "dashboard",
  "www",
  "static",
  "assets",
  "_next",
  "v1",
  "v2",
  "app",
]);

/**
 * slug가 형식상 유효한지 + 예약어 여부를 체크
 */
export function isValidSlug(slug: string): boolean {
  return (
    /^[a-z0-9](?:[a-z0-9-]{1,7})[a-z0-9]$/.test(slug) && // 총 3~9자
    !RESERVED_SLUGS.has(slug)
  );
}

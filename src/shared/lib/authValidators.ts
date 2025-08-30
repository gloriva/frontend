export const isEmail = (v: string) => /.+@.+\..+/.test(v);
export const hasAt = (v: string) => v.includes("@");
export const minLen = (v: string, len = 6) => (v?.length ?? 0) >= len;
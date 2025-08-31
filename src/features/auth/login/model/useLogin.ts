import { useCallback, useState } from "react";
import { supabase } from "@/shared/config/supabase";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    } catch (e: any) {
      setError(e?.message ?? "로그인 중 오류가 발생했습니다.");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { login, loading, error };
}
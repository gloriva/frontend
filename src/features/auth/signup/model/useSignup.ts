import { useCallback, useState } from "react";
import { supabase } from "@/shared/config/supabase";
import { normalizeEmail } from "@/shared/lib/normalizeEmail";

type SignupInput = {
  email: string;
  password: string;
  churchName?: string;
};

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const signUp = useCallback(async ({ email, password, churchName }: SignupInput) => {
    setLoading(true);
    setError(null);
    try {
      const cleanEmail = normalizeEmail(email);
      
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          emailRedirectTo: undefined,
          data: {
            church_name: churchName
          }
        }
      });
      console.log({ data, error });
      
      if (error) throw error;
      return data;
    } catch (e: any) {
      setError(e?.message ?? "회원가입 중 오류가 발생했습니다.");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { signUp, loading, error };
}
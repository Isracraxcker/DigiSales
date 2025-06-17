import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

// eslint-disable-next-line no-unused-vars
export const useAuthStore = create((set) => ({
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
  cerrarSesion:async()=>{
    await supabase.auth.signOut();
  }
}));
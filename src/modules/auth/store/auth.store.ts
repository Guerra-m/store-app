import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { UsuarioAuth } from "../types/User";

type AuthState = {
  user: UsuarioAuth | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  setUser: (user: UsuarioAuth | null) => void;
  setAuth: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;

  clear: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      setUser: (user) => set({ user }),

      setAuth: (value) =>
        set({ isAuthenticated: value }),

      setLoading: (value) =>
        set({ loading: value }),

      setError: (value) =>
        set({ error: value }),

      clear: () =>
        set({
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        }),
    }),
    {
      // STORE FRONT
      name: "store-auth-storage",
    }
  )
);
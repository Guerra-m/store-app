import { create } from "zustand";

type User = {
  id: number;
  email: string;
  nombre?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;

  setAuth: (user: User, token: string) => void;
  logout: () => void;

  isAuthenticated: () => boolean;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  isAuthenticated: () => {
    return !!get().token;
  },
}));
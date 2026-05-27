import { create } from "zustand";

type AuthView = "login" | "register";

type AuthModalState = {
  open: boolean;
  view: AuthView;
  message?: string;

  openLogin: (message?: string) => void;
  openRegister: (message?: string) => void;

  closeModal: () => void;
};

export const useAuthModalStore =
  create<AuthModalState>((set) => ({

    open: false,

    view: "login",

    message: "",

    openLogin: (message = "") =>
      set({
        open: true,
        view: "login",
        message,
      }),

    openRegister: (message = "") =>
      set({
        open: true,
        view: "register",
        message,
      }),

    closeModal: () =>
      set({
        open: false,
        message: "",
      }),
  }));
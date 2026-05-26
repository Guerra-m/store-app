import { create } from "zustand";

type AuthModalState = {
  open: boolean;
  message?: string;
  openModal: (message?: string) => void;
  closeModal: () => void;
};

export const useAuthModalStore = create<AuthModalState>((set) => ({
  open: false,
  message: "",

  openModal: (message = "") =>
    set({ open: true, message }),

  closeModal: () =>
    set({ open: false, message: "" }),
}));
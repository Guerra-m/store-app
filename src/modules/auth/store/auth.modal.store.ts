import { create } from "zustand";

type AuthModalState = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useAuthModalStore = create<AuthModalState>((set) => ({
  open: false,

  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));
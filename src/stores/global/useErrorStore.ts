import { create } from "zustand";
import { ErrorState } from "../../types/global/errorState";

export const useErrorStore = create<ErrorState>((set) => ({
  error: null,
  setError: (error: any) => set({ error }),
}));

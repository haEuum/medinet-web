import { create } from "zustand";
import { ErrorState } from "../../types/global/errorState";

export const errorStore = create<ErrorState>((set) => ({
  error: null,
  setError: (error: any) => set({ error }),
}));

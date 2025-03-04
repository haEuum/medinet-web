import { create } from "zustand";
import { LoadingState } from "../../types/global/loadingState";

export const LoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

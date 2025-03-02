import { create } from "zustand";
import { LoadingState } from "../../types/global/loadingState";

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

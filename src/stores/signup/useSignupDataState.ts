import { create } from "zustand";
import { SignupForm } from "../../types/auth/signupForm";
import { SignupDataState } from "../../types/auth/signupDataState";

export const useSignupDataState = create<SignupDataState>((set) => ({
  signupData: {
    name: "",
    email: "",
    password: "",
    department: "",
    field: "",
  },
  setSignupData: (signupData: SignupForm) => set({ signupData }),
}));

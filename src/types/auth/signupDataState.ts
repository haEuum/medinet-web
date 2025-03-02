import { SignupForm } from "./signupForm";

export interface SignupDataState {
  signupData: SignupForm;
  setSignupData: (signupForm: SignupForm) => void;
}

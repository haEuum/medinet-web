import { SignupForm } from '../auth/signupForm';

export interface SignupDataState {
    signupData: SignupForm;
    setSignupData: (signupForm: SignupForm) => void;
}
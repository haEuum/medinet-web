import { create } from 'zustand';
import { SignUp } from '@/types/signup/signup.type';

interface SignupState {
    signupData: SignUp & {
        authenticationCode: string;
    };
    setField: (name: keyof SignupState['signupData'], value: string) => void;
    resetSignup: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
    signupData: {
        name: '',
        phoneNumber: '',
        password: '',
        field: '',
        userClass: '',
        authenticationCode: '',
    },
    setField: (name, value) =>
        set((state) => ({
            signupData: {
                ...state.signupData,
                [name]: value,
            },
        })),
    resetSignup: () => set(() => ({
        signupData: {
            name: '',
            phoneNumber: '',
            password: '',
            field: '',
            userClass: '',
            phoneVerificationCode: '',
            authenticationCode: '',
        },
    })),
}));
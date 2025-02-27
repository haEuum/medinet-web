import { create } from 'zustand';
import { LoginForm } from '../../types/auth/loginForm';
import { LoginDataState } from '../../types/store/loginDataState';

export const useLoginDataState = create<LoginDataState>((set) => ({
    loginData: {
        email: "",
        password: ""
    },
    setLoginData: (loginData: LoginForm) => set({ loginData })
}));
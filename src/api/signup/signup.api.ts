import {AuthResponse} from "@/types/login/login.type";
import axios from "axios";
import {SignUp} from "@/types/signup/signup.type";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const signup = async (signUpData: SignUp): Promise<AuthResponse> => {
    const {data} = await axios.post<AuthResponse>(`${SERVER_URL}/signup`, signUpData);
    return data;
};
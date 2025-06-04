import { SignUp } from "@/types/auth/auth.type";
import { isValidEmail, isValidPassword, isValidPhoneNumber } from "@/utils/regex-input";

export const validateSignup = (data: SignUp): string | null => {
    if (!data.email.trim()) return "이메일을 입력해주세요!";
    if (!isValidEmail(data.email)) return "유효한 이메일 형식을 입력해주세요!";
    if (!data.password.trim()) return "비밀번호를 입력해주세요!";
    if (!isValidPassword(data.password)) return "비밀번호는 8자 이상, 영문 대소문자, 숫자, 특수문자를 포함해야 합니다!";
    if (!data.phone.trim()) return "전화번호를 입력해주세요!";
    if (!isValidPhoneNumber(data.phone)) return "유효한 전화번호 형식을 입력해주세요!";
    if (!data.phoneVerificationCode.trim()) return "인증번호를 입력해주세요!";
    if (!data.field) return "직군을 선택해주세요!";
    if (!data.userClass) return "소속을 선택해주세요!";
    return null;
};
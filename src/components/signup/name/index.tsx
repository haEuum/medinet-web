import TextField from "@/components/ui/textfield";
import useSignup from "@/hooks/auth/useSignup";

const Name = () => {
    const {signupData, onChange} = useSignup();

    return (
        <>
            <TextField
                label="이메일"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                value={signupData.email}
                onChange={onChange}
            />
            <TextField
                label="비밀번호"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                value={signupData.password}
                onChange={onChange}
            />
        </>
    );
};

export default Name;
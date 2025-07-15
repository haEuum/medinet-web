import TextField from "@/components/ui/textfield";
import useSignup from "@/hooks/auth/useSignup";

const Name = () => {
    const { signupData, onChange, onKeyDown } = useSignup();

    return (
        <>
            <TextField
                label="이름"
                type="text"
                name="name"
                value={signupData.name}
                placeholder="이름을 입력해주세요."
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <TextField
                label="비밀번호"
                type="password"
                name="password"
                value={signupData.password}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </>
    );
};

export default Name;
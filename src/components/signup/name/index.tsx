import TextField from "@/components/ui/textfield";
import useSignup from "@/hooks/auth/useSignup";

interface NameProps {
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

const Name = ({ onKeyDown }: NameProps) => {
    const { signupData, onChange } = useSignup();

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
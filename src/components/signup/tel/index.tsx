import "./style.scss";
import TextField from "@/components/ui/textfield";
import useSignup from "@/hooks/auth/useSignup";
import Button from "@/components/ui/button";

interface TelProps {
    inputCode: string;
    setInputCode: React.Dispatch<React.SetStateAction<string>>;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>, inputCode?: string) => void;
}

const Tel = ({ inputCode, setInputCode, onKeyDown }: TelProps) => {
    const { signupData, handlePhoneVerification, onChange } = useSignup();

    return (
        <>
            <div className="tel_access">
                <TextField
                    label="전화번호"
                    type="number"
                    name="phoneNumber"
                    placeholder="- 없이 입력해주세요."
                    value={signupData.phoneNumber}
                    onChange={onChange}
                    onKeyDown={(e) => onKeyDown(e)}
                />
                <Button
                    text="인증하기"
                    color="Primary"
                    size="Medium"
                    onClick={handlePhoneVerification}
                />
            </div>
            <TextField
                label="인증번호"
                type="text"
                name="phoneVerificationCode"
                placeholder="인증번호를 입력해주세요"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                onKeyDown={(e) => onKeyDown(e, inputCode)}
            />
        </>
    );
};

export default Tel;
import TextField from "@/components/common/textField";
import useSignup from "@/hooks/auth/useSignup";
import { Toast } from "@/libs/toast";
import { verificationEmailCode } from "@/api/verification.api";
import './style.scss';

const Step2 = () => {
    const { signupData, onChange, onKeyDown } = useSignup();

    const handleEmailVerification = async () => {
        try {
            await verificationEmailCode(signupData.email);
            Toast("success", "이메일 코드 전송 완료");
        } catch (error) {
            Toast("error", "이메일 코드 전송 실패");
        };
    };

    return (
        <div className='step2-container'>
            <div className='step2-input-group'>
                <TextField 
                    label='전화번호'
                    name='phone'
                    placeholder='전화번호를 입력해주세요'
                    value={signupData.phone}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className='step2-input-group'>
                <TextField 
                    label='인증번호'
                    name='emailVerificationCode'
                    placeholder='인증번호를 입력해주세요'
                    value={signupData.emailVerificationCode}
                    onChange={onChange}
                />
            </div>
            <button
                type="button"
                onClick={handleEmailVerification}
                className="phone-verification-btn"
            >
                인증번호 재요청
            </button>
        </div>
    );
};

export default Step2;
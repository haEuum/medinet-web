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
        <div className='signup-input'>
            <TextField 
                label='이메일'
                name='email'
                placeholder='이메일을 입력해주세요'
                value={signupData.email}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <TextField 
                label='인증번호'
                name='emailVerificationCode'
                placeholder='인증번호를 입력해주세요'
                value={signupData.emailVerificationCode}
                onChange={onChange}
            />
            <div className="email-verification-btn-container">
                <button
                    type="button"
                    className="email-verification-btn"
                    onClick={handleEmailVerification}
                >
                    인증번호 재요청
                </button>
            </div>
        </div>
    );
};

export default Step2;
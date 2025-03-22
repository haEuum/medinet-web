import useSignup from '@/hooks/auth/useSignup';
import './style.scss';

const Step2 = () => {
    const { signupData, onChange } = useSignup();

    return (
        <div className='step2-container'>
        <label className='step1-label'>이메일</label>
        <div className='input-box'>
            <input
                type='text'
                name='email'
                placeholder='이메일을 입력해주세요'
                value={signupData.email}
                onChange={onChange}
            />
        </div>
        <label className='step2-label'>인증번호</label>
        <div className='input-box'>
            <input
                type='text'
                name='phoneVerificationCode'
                placeholder='인증번호를 입력해주세요'
                value={signupData.phoneVerificationCode}
                onChange={onChange}
            />
        </div>
    </div>
    );
};

export default Step2;
import useSignup from '@/hooks/auth/useSignup';
import './style.scss';

const Step3 = () => {
    const { signupData, onChange } = useSignup();
    
    return (
        <div className='step3-container'>
        <label className='step1-label'>전화번호</label>
        <div className='input-box'>
            <input
                type='text'
                name='phone'
                placeholder='전화번호를 입력해주세요'
                value={signupData.phone}
                onChange={onChange}
            />
        </div>
        <label className='step3-label'>인증번호</label>
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

export default Step3;
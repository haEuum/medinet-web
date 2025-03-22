import useSignup from '@/hooks/auth/useSignup';
import './style.scss';

const Step1 = () => {
    const { signupData, onChange } = useSignup();
    
    return (
        <div className='step1-container'>
            <label className='step1-label'>이름</label>
            <div className='input-box'>
                <input
                    className='step1-input'
                    type='text'
                    name='name'
                    placeholder='이름을 입력해주세요'
                    value={signupData.name}
                    onChange={onChange}
                />
            </div>
            <label className='step1-label'>비밀번호</label>
            <div className='input-box'>
                <input
                    className='step1-input'
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력해주세요'
                    value={signupData.password}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default Step1;
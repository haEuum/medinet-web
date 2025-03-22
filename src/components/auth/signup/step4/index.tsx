import useSignup from '@/hooks/auth/useSignup';
import './style.scss';

const Step4 = () => {
    const { signupData, onChange } = useSignup();
    
    return (
        <div className='step4-container'>
        <label className='step1-label'>소속</label>
        <div className='input-box'>
            <input
                type='text'
                name='userClass'
                placeholder='소속을 입력해주세요'
                value={signupData.userClass}
                onChange={onChange}
            />
        </div>
        <label className='step4-label'>직군</label>
        <div className='input-box'>
            <input
                type='text'
                name='field'
                placeholder='직군를 입력해주세요'
                value={signupData.field}
                onChange={onChange}
            />
        </div>
    </div>
    );
};

export default Step4;;
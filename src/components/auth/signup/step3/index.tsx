import TextField from '@/components/common/textField';
import useSignup from '@/hooks/auth/useSignup';

const Step4 = () => {
    const { signupData, onChange } = useSignup();

    return (
        <div className='step4-container'>
            <div className='step4-input-group'>
                <TextField 
                    label='소속'
                    name='userClass'
                    placeholder='소속을 입력해주세요'
                    value={signupData.userClass}
                    onChange={onChange}
                />
            </div>
            <div className='step4-input-group'>
                <TextField 
                    label='직군'
                    name='field'
                    placeholder='직군을 입력해주세요'
                    value={signupData.field}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default Step4;
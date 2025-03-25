import TextField from "@/components/common/textField";
import useSignup from "@/hooks/auth/useSignup";

const Step1 = () => {
    const { signupData, onChange } = useSignup();

    return (
        <div className='step1-container'>
            <div className='step1-input-group'>
                <TextField 
                    label='이름'
                    name='name'
                    placeholder='이름을 입력해주세요'
                    value={signupData.name}
                    onChange={onChange}
                />
            </div>
            <div className='step1-input-group'>
                <TextField 
                    label='비밀번호'
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
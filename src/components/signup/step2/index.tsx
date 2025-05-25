import TextField from "@/components/common/textbox";
import useSignup from "@/hooks/auth/useSignup";
import "./style.scss";

const Step2 = () => {
  const { signupData, handlePhoneVerification, onChange } = useSignup();

  return (
    <div className="signup-step2">
      <div className="signup-step2-input-group">
        <div className="signup-step2-phone-input">
          <TextField
            label="전화번호"
            type="phoneNum"
            name="phoneNum"
            placeholder="전화번호를 입력해주세요"
            value={ signupData.phone }
            onChange={ onChange }
          />
          <button 
            className="AuthenticationButton"
            onClick={ handlePhoneVerification }>인증하기</button>
        </div>
        <TextField
          label="인증번호"
          type="authenticationCode"
          name="authenticationCode"
          placeholder="인증번호를 입력해주세요"
          value={ signupData.phoneVerificationCode }
          onChange={ onChange }
        />
      </div>
    </div>
  );
};

export default Step2;
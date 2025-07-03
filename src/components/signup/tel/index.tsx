import TextField from "@/components/ui/textfield";
import useSignup from "@/hooks/auth/useSignup";
import Button from "@/components/common/button";

const Tel = () => {
  const { signupData, handlePhoneVerification, onChange } = useSignup();

  return (
      <>
        <div className="tel_access">
          <TextField
            label="전화번호"
            type="number"
            name="phoneNumber"
            placeholder="전화번호를 입력해주세요"
            value={ signupData.phoneNumber }
            onChange={ onChange }
          />
          <button
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
      </>
  );
};

export default Tel;
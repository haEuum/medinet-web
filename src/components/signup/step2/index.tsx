import TextField from "@/components/common/textField";
import "./style.scss";

const Step2 = () => {
  return (
    <div className="signup-step2">
      <div className="signup-step2-input-group">
        <div className="signup-step2-phone-input">
          <TextField
            label="전화번호"
            type="phoneNum"
            name="phoneNum"
            placeholder="전화번호를 입력해주세요"
            value=""
            onChange={() => {}}
          />
          <button className="AuthenticationButton">
            인증하기
          </button>
        </div>
        <TextField
          label="인증번호"
          type="authenticationCode"
          name="authenticationCode"
          placeholder="인증번호를 입력해주세요"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Step2;

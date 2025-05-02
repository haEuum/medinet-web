import TextField from "@/components/common/textField";
import "./style.scss";

const Step1 = () => {
  return (
    <div className="signup-step1">
      <div className="signup-step1-input-group">
        <TextField
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value=""
          onChange={() => {}}
        />
        <TextField
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Step1;

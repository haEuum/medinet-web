import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {path} from "@/constants/path/path";
import useSignup from "@/hooks/auth/useSignup";
import Logo from "@/assets/logo/logo.svg";
import SignupBanner from "@/assets/auth/signupBanner.svg";
import Button from "@/components/ui/button";
import Name from "@/components/signup/name";
import Tel from "@/components/signup/tel";
import Work from "@/components/signup/work";
import ProgressBar from "@/components/common/progressbar";
import "./style.scss";

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [inputCode, setInputCode] = useState<string>("");
    const {handleSignup, validateStep, onKeyDown} = useSignup({step, setStep});

    const handleLoginRedirect = () => {
        navigate(path.LOGIN);
    };

    const handleNextStep = () => {
        if (step < 3) {
            const isValid = validateStep();
            if (!isValid) return;
            setStep(step + 1);
        } else {
            handleSignup(inputCode);
        }
    };

    return (
        <main className="main auth-page">
            <div className="auth-container">
                <div className="auth-banner">
                    <img src={SignupBanner} alt="signupBanner"/>
                </div>
                <div className="auth-form">
                    <div className="auth-logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <ProgressBar step={step}/>
                    <div className="auth-input-group">
                        {step === 1 && <Name onKeyDown={(e) => onKeyDown(e)} />}
                        {step === 2 && <Tel inputCode={inputCode} setInputCode={setInputCode} onKeyDown={(e) => onKeyDown(e)} />}
                        {step === 3 && <Work onKeyDown={(e) => onKeyDown(e, inputCode)} />}
                    </div>
                    <Button
                        text={step < 3 ? "다음" : "가입하기"}
                        color="Primary"
                        size="Large"
                        onClick={handleNextStep}
                    />
                    <div className="redirect">
                        <span>이미 계정이 있으신가요?</span>
                        <span onClick={handleLoginRedirect}> 로그인 하기</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
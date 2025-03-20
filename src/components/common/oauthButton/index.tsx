import googleIcon from '@/assets/googleIcon.svg';
import kakaoIcon from '@/assets/kakaoIcon.svg';
import './style.scss';

const OauthButton = () => {
    return (
        <div className="oauth-button-container">
            <div className="oauth-button">
                <button className="google">
                    <img src={googleIcon} alt="Google Icon" />
                </button>
                <button className="kakao">
                    <img src={kakaoIcon} alt="Kakao Icon" />
                </button>
            </div>
        </div>
    );
};

export default OauthButton;
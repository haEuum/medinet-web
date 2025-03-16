import SignupBanner from '@/assets/signupBanner.svg';
import './style.scss';

const Signup = () => {
    return (
        <div className='signup-container'>
            <div className='signup-banner'>
                <img src={ SignupBanner } alt='banner' />
            </div>
        </div>
    );
};

export default Signup;
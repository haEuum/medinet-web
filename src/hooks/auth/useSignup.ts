import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '@/api/signup/signup.api';
import { verification } from '@/api/verification/verification.api';
import { VerificationRequest } from '@/types/verification/verification.type';
import { Toast } from '@/libs/toast';
import { path } from '@/constants/path/path';
import { useSignupStore } from '@/stores/signup/signup.store';

interface UseSignupProps {
    step?: number;
    setStep?: (step: number) => void;
}

const useSignup = ({ step, setStep }: UseSignupProps = {}) => {
    const navigate = useNavigate();
    const { signupData, setField } = useSignupStore();

    // 입력 필드 값 변경 처리
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setField(name as keyof typeof signupData, value);
    }, [setField]);

    // 인증번호 요청
    const handlePhoneVerification = useCallback(async () => {
        try {
            const res = await verification({ phoneNumber: signupData.phoneNumber } as VerificationRequest);
            setField('authenticationCode', res.data.authenticationCode); // 클라이언트 내 저장
            Toast('success', '인증번호가 발송되었습니다!');
        } catch {
            Toast('error', '인증번호 발송을 실패했습니다!');
        }
    }, [signupData.phoneNumber]);

    // 각 스텝별 필수 입력 항목 정의
    const requiredFields: { key: keyof typeof signupData; message: string }[] = [
        { key: 'name', message: '이름을 입력해주세요' },
        { key: 'password', message: '비밀번호를 입력해주세요' },
        { key: 'phoneNumber', message: '전화번호를 입력해주세요' },
        { key: 'field', message: '직군을 선택해주세요' },
        { key: 'userClass', message: '소속을 선택해주세요' },
    ];

    // 각 스텝별 필드 유효성 검사
    const validateStep = () => {
        if (step === undefined) return true;

        const stepRequiredFields: Record<number, (keyof typeof signupData)[]> = {
            1: ['name', 'password'],
            2: ['phoneNumber'],
            3: ['field', 'userClass'],
        };

        const currentFields = stepRequiredFields[step] || [];

        for (const key of currentFields) {
            if (!signupData[key]) {
                const msg = requiredFields.find((f) => f.key === key)?.message || '필수 항목을 입력해주세요';
                Toast('error', msg);
                return false;
            }
        }

        return true;
    };

    // Enter 키로 스텝 진행 또는 회원가입 요청
    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, inputCode?: string) => {
        if (e.key !== 'Enter') return;

        if (step !== undefined && setStep !== undefined) {
            if (step < 3) {
                if (validateStep()) setStep(step + 1);
            } else {
                if (inputCode) handleSignup(inputCode);
            }
        }
    };

    // 최종 회원가입 요청
    const handleSignup = useCallback(async (inputCode: string) => {
        for (const { key, message } of requiredFields) {
            if (!signupData[key]) {
                return Toast('error', message);
            }
        }

        // 클라이언트에서 인증번호 일치 여부 검증
        if (!signupData.authenticationCode) {
            return Toast('error', '인증번호를 먼저 요청해주세요');
        }

        if (inputCode !== signupData.authenticationCode) {
            return Toast('error', '인증번호가 일치하지 않습니다');
        }

        // 서버에 보낼 데이터만 필터링
        const {
            name,
            password,
            phoneNumber,
            field,
            userClass,
        } = signupData;

        const payload = {
            name,
            password,
            phoneNumber,
            field,
            userClass,
        };

        console.group('📤 서버 전송 데이터 (authenticationCode 제외)');
        console.table(payload);
        console.groupEnd();

        try {
            await signup(payload);
            Toast('success', '회원가입 성공');
            navigate(path.LOGIN);
        } catch {
            Toast('error', '정보를 다시 확인해주세요!');
        }
    }, [signupData, navigate]);

    return {
        signupData,
        onChange,
        onKeyDown,
        handleSignup,
        handlePhoneVerification,
        validateStep,
    };
};

export default useSignup;
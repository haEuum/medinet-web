export enum SignupPhase {
    NAME = "NAME",
    PASSWORD = "PASSWORD",
    EMAIL = "EMAIL",
    CODE = "CODE",
    DEPARTMENT = "DEPARTMENT",
    FIELD = "FIELD",
    COMPLETE = "COMPLETE"
}

export interface SignupPhaseState {
    signupPhase: SignupPhase;
    setSignupPhase: (signupPhase: SignupPhase) => void;
}
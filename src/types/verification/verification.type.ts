export interface Verification {
    phoneNumber: string;
}

export interface VerificationResponse {
    data: {
        phoneNumber: string;
        authenticationCode: string;
    };
};
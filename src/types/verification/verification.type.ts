export interface VerificationRequest {
    phoneNumber: string;
}

export interface VerificationResponse {
    data: {
        phoneNumber: string;
        authenticationCode: string;
    };
};
export interface Login {
    email: string;
    password: string;
};

export interface SignUp {
    email: string;
    phone: string;
    password: string;
    field: string;
    name: string;
    userClass: string;
};

export interface AuthResponse {
    data: {
        accessToken: string;
        refreshToken: string;
    };
};

export interface NewAccessToken extends Response {
    data: {
        accessToken: string;
    };
};
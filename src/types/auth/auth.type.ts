export interface Login {
    email: string;
    phone: string;
    password: string;
}

export interface Register {
    name: string;
    email: string;
    phone: string;
    password: string;
    field: string;
    department: string;
}

export interface LoginResponse {
    data: {
        accessToken: string;
        refreshToken: string;
    }
}

export interface NewAccessTokenResponse {
    data: {
        accessToken: string;
    }
}
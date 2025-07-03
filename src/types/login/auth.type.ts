export interface Login {
    name: string;
    password: string;
}

export interface AuthResponse {
    data: {
        accessToken: string;
        refreshToken: string;
    }
}

export interface NewAccessToken extends Response {
    data: {
        accessToken: string;
    }
}
export interface LoginType {
    email: string;
    phone: string;
    password: string;
};

export interface RegisterType {
    email: string;
    phone: string;
    password: string;
    field: string;
    name: string;
    userClass: string;
};

export interface AuthResponseType {
    data: {
        accessToken: string;
        refreshToken: string;
    };
    status: number;
    message: string;
};
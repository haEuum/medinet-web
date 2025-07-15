export const isValidEmail = ( email: string ): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = ( password: string ): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

export const isValidPhoneNumber = ( phone: string ): boolean => {
    return /^[0-9]{10,11}$/.test(phone);
};

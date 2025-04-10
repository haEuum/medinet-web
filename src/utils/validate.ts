export const validateEmail = ( email: string ): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = ( password: string ): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

export const validatePhone = ( phone: string ): boolean => {
    return /^[0-9]{10,11}$/.test(phone);
};
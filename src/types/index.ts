export type MainState = {
    user: Record<string, any> | null;
    isLoggedIn: boolean;
}

export type RegisterFormType = {
    firstName: string;
    lastName: string;
    idNumber: string | null;
    kraPin: string | null;
    password: string;
    confirmPassword: string;
    phoneNumber: number | null;
    citizenship: string | null | undefined;
}

export type SignInFormType = {
    idOrKraPin: string;
    phoneNumber: string | null;
    password: string;
}

export type OtpFormType = {
    phoneNumber: number;
    otp: number;
}

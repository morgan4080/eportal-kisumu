export type MainState = {
    user: Record<string, any> | null;
    isLoggedIn: boolean;
}

export type RegisterFormType = {
    firstName: string;
    lastName: string;
    businessName: string | undefined;
    idNumber: string | undefined;
    kraPin: string | undefined;
    password: string;
    confirmPassword: string;
    phoneNumber: number | undefined;
    citizenship: string | undefined;
}

export type SignInFormType = {
    idOrKraPin: string;
    password: string;
}

export type OtpFormType = {
    phoneNumber: number;
    otp: number;
}

export type MainState = {
    user: Record<string, any> | null;
    isLoggedIn: boolean;
}

export type SignInFormType = {
    idOrKraPin: string;
    password: string;
    citizenship: string | null | undefined;
}

export type OtpFormType = {
    phoneNumber: number;
    otp: number;
}

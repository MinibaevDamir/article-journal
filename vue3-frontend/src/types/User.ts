export interface UserData {
    name: string;
    surname: string;
    blogDescription: string;
    background?: File | null;
    logo: File | null;
    password: string;
    confirmPassword: "";
    email: string;
}

export type UserLoginData = Pick<UserData, 'password' | 'email'>
export interface UserData {
    name: string;
    surname: string;
    blogDescription: string | null;
    background?: Buffer | null;
    logo: Buffer | null;
    password: string;
    confirmPassword: "";
    email: string;
}

export type UserLoginData = Pick<UserData, 'password' | 'email'>
export interface Auth {
    email: string;
    password: string;
}

export const AuthInitialState: Auth = {
    email: '',
    password: '',
};
export interface Auth {
    Email: string;
    Password: string;
}

export const AuthInitialState: Auth = {
    Email: '',
    Password: '',
};
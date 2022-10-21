export interface User {
    id?: number;
    name: string;
    email: string;
    username?: string;
    token?: string;
}

export interface PersistableUser {
    id?: number;
    username?: string;
    email?: string;
    token?: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export const emptyUserState: LoginUser = {
    email: '',
    password: '',
};

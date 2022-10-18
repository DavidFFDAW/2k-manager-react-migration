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
    token?: string;
}

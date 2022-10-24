import { useContext, useCallback } from 'react';
import { AppConfig } from '../AppConfig';
import UserContext from '../contexts/user.context';
import { LoginResponse } from '../models/API';
import { LoginUser, User } from '../models/User';
import { persistUserObject } from '../services/auth.service';
import { useHttp } from './useHttp';

export function useAuth() {
    const { storedUser, setStoredUser } = useContext(UserContext);
    const { post } = useHttp();

    const tryPersistUser = (user: User) => {
        persistUserObject(user);
        setStoredUser(user);
    };

    const tryLogInUser = useCallback((user: LoginUser) => {
        return post({
            endpoint: AppConfig.API_BASE_URL + 'login',
            body: user,
        }).then((response: LoginResponse) => {
            if (!response) return;
            persistUserObject(response.user);
            setStoredUser(response.user);
        });
    }, []);

    return {
        tryLogInUser,
        storedUser,
        setStoredUser,
    };
}

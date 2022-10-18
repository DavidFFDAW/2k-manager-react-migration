import { useContext } from 'react';
import UserContext, { CType } from '../contexts/user.context';

export function useAuth() {
    const { storedUser, setStoredUser } = useContext(UserContext);

    return {
        storedUser,
        setStoredUser,
    };
}

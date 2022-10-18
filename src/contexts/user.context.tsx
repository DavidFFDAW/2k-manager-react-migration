import React, { useState } from 'react';
import { getPersistedUserObject } from '../services/auth.service';

export interface CType {
    storedUser?: any;
    setStoredUser?: (user: any) => void;
}

const UserContext: React.Context<CType> = React.createContext({});

export const UserProvider = ({ children }: any) => {
    const [storedUser, setStoredUser] = useState(() => getPersistedUserObject());

    return <UserContext.Provider value={{ storedUser, setStoredUser }}>{children}</UserContext.Provider>;
};

export default UserContext;

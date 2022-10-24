import React, { useState } from 'react';
import { PersistableUser } from '../models/User';
import { getPersistedUserObject } from '../services/auth.service';

export interface CType {
    storedUser?: any;
    setStoredUser?: any;
}

const UserContext: React.Context<CType> = React.createContext({});

export const UserProvider = ({ children }: any) => {
    const [storedUser, setStoredUser] = useState<PersistableUser>(() => getPersistedUserObject());

    return <UserContext.Provider value={{ storedUser, setStoredUser }}>{children}</UserContext.Provider>;
};

export default UserContext;

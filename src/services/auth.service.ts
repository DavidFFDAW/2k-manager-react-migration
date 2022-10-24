import { createPersistableDataUser } from '../adapters/persisted.user.adapter';
import { AppConfig } from '../AppConfig';
import { PersistableUser, User } from '../models/User';

const userKey: string = AppConfig.USER_KEY;
const emptyUserInitialState: PersistableUser = {};

export const getPersistedUserObject = (): User => {
    const user = localStorage.getItem(userKey);
    return user ? JSON.parse(user) : emptyUserInitialState;
};

export const persistUserObject = (user: User): void => {
    const persistableUser = createPersistableDataUser(user);
    localStorage.setItem(userKey, JSON.stringify(persistableUser));
};

export const removePersistedUserObject = (): void => {
    localStorage.removeItem(userKey);
};

export const isUserPersisted = (): boolean => {
    const persistedUser = getPersistedUserObject();
    return Boolean(persistedUser.token);
};

export default {
    getPersistedUserObject,
    persistUserObject,
    removePersistedUserObject,
    isUserPersisted,
};

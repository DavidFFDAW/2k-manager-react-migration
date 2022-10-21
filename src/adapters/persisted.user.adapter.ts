import { PersistableUser, User } from '../models/User';

/**
 * User objects can contain sensitive data that should not be persisted. This method only returns the very basic to prevent sensitive data from being persisted.
 * @param user User object to be persisted.
 * @returns PersistableUser object with only the data that should be persisted.
 */
export const createPersistableDataUser = (user: User): PersistableUser => {
    return {
        id: user.id,
        email: user.email,
        username: user.name,
        token: user.token,
    };
};

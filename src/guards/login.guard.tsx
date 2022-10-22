import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes } from '../models/routes';
import { isUserPersisted } from '../services/auth.service';

const IsAlreadyLoggedIn = <Navigate replace to={PrivateRoutes.PRIVATE} />;
const IsNotLoggedIn = <Outlet />;

export function LoginAuthGuard(): JSX.Element {
    const isUserLoggedIn = isUserPersisted();
    return isUserLoggedIn ? IsAlreadyLoggedIn : IsNotLoggedIn;
}

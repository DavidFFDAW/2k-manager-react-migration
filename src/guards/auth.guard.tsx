import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../models/routes';

interface Props {
    privateValidation: boolean;
}

const IsNotValidated = <Navigate replace to={AppRoutes.LOGIN} />;
const IsValidated = <Outlet />;

export function AuthGuard({ privateValidation }: Props): JSX.Element {
    const isUserLoggedIn = false;
    return isUserLoggedIn && privateValidation ? IsValidated : IsNotValidated;
}

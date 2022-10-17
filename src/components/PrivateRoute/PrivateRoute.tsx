import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { PrivateRouteProps } from './models/PrivateRouteProps';
// import useAuth from '../../hooks/useAuth';

export function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
    // Hook for user loggedIn check
    const isLogged = false;

    if (!isLogged) redirect('/login');
    // const currentURL = useLocation();
    // window.sessionStorage.setItem('access-route', currentURL.pathname);
    return (
        <React.Fragment>
            <Route path={rest.path} element={rest.element}>
                {children}
            </Route>
        </React.Fragment>
    );
}

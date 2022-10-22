import { CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import Links from './components/Links';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { UserProvider } from './contexts/user.context';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutes, PrivateRoutes } from './models/routes';
import './App.css';
import { LoginAuthGuard } from './guards/login.guard';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));

function App() {
    return (
        <SnackbarProvider maxSnack={4}>
            <Suspense fallback={<CircularProgress />}>
                <BrowserRouter>
                    <UserProvider>
                        {/* <Links /> */}
                        <RoutesWithNotFound>
                            <Route path="/" element={<Navigate to={AppRoutes.LOGIN} replace />} />

                            <Route element={<LoginAuthGuard />}>
                                <Route path={AppRoutes.LOGIN} element={<Login />} />
                            </Route>

                            <Route element={<AuthGuard privateValidation={true} />}>
                                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRoutingModule />} />
                            </Route>
                        </RoutesWithNotFound>
                    </UserProvider>
                </BrowserRouter>
            </Suspense>
        </SnackbarProvider>
    );
}

export default App;

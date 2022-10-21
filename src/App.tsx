import { CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Links from './components/Links';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { UserProvider } from './contexts/user.context';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutes, PrivateRoutes } from './models/routes';
import './App.css';

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
                            <Route path="/" element={<h1>MAIN</h1>} />
                            <Route path={AppRoutes.LOGIN} element={<Login />} />

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

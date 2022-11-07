import { CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { UserProvider } from './contexts/user.context';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutes, PrivateRoutes } from './models/routes';
import { LoginAuthGuard } from './guards/login.guard';
import theme from './theme';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ErrorBoundary>
                <SnackbarProvider
                    maxSnack={4}
                    autoHideDuration={3500}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
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
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;

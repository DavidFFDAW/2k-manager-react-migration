import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {
    return (
        <SnackbarProvider maxSnack={4}>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <PrivateRoute path="/test" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </SnackbarProvider>
    );
}

export default App;

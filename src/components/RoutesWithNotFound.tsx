import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BoxContainer } from './BoxContainer/BoxContainer';

const NotFound = lazy(() => import('./Not-found'));

interface Props {
    children: JSX.Element[] | JSX.Element;
}

function RoutesWithNotFound({ children }: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
export default RoutesWithNotFound;

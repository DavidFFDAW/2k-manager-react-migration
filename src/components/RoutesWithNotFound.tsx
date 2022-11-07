import { Route, Routes } from 'react-router-dom';
import { BoxContainer } from './BoxContainer/BoxContainer';
import NotFound from './Not-found';

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

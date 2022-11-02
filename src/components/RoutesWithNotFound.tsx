import { Route, Routes } from 'react-router-dom';
import { BoxContainer } from './BoxContainer/BoxContainer';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

function RoutesWithNotFound({ children }: Props) {
    return (
        <Routes>
            {children}
            <Route
                path="*"
                element={
                    <BoxContainer>
                        <h1>Not Found</h1>
                    </BoxContainer>
                }
            />
        </Routes>
    );
}
export default RoutesWithNotFound;

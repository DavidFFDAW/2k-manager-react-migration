import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from '../../components/RoutesWithNotFound';
import { PrivateRoutes } from '../../models/routes';

function PrivateRoutingModule() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}></Route>
            <Route path={PrivateRoutes.DASHBOARD} element={<h1>DASHBOARD AUTH</h1>}></Route>
        </RoutesWithNotFound>
    );
}

export default PrivateRoutingModule;

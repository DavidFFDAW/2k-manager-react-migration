import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Header from '../../components/Header';
import RoutesWithNotFound from '../../components/RoutesWithNotFound';
import { PrivateRoutes } from '../../models/routes';

const Dashboard = lazy(() => import('./Dashboard/index'));
const Champions = lazy(() => import('./Champions/Champions'));
const Teams = lazy(() => import('./Dashboard/index'));

function PrivateRoutingModule() {
    return (
        <>
            <Header />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}></Route>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
                <Route path={PrivateRoutes.CHAMPIONS} element={<Champions hasAdminPermission={true} />}></Route>
                <Route path={PrivateRoutes.TEAMS} element={<h1 style={{ marginTop: 100 }}>USER ME</h1>}></Route>
                <Route path={PrivateRoutes.USER} element={<h1 style={{ marginTop: 100 }}>USER ME</h1>}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;

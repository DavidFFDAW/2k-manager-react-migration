import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Header from '../../components/Header';
import RoutesWithNotFound from '../../components/RoutesWithNotFound';
import { PrivateRoutes } from '../../models/routes';

const Dashboard = lazy(() => import('./Dashboard/index'));
const Champions = lazy(() => import('./Champions/Champions'));
const News = lazy(() => import('./News/News'));
const SingleNew = lazy(() => import('./News/SingleNew'));

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
                <Route path={PrivateRoutes.NEWS} element={<News />}></Route>
                <Route path={PrivateRoutes.SINGLE_NEW} element={<SingleNew />}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;

import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import RoutesWithNotFound from '../../../components/RoutesWithNotFound';
// import { PrivateRoutes } from '../../../models/routes';

const Teams = lazy(() => import('./Teams'));
const SingleTeam = lazy(() => import('./SingleTeam'));
const NewTeam = lazy(() => import('./pages/NewTeam/NewTeam'));

export function TeamsRoutingModule() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Teams hasAdminPermission={true} />}></Route>
            <Route
                path="/new"
                element={
                    <BoxContainer>
                        <NewTeam />
                    </BoxContainer>
                }
            ></Route>
            <Route
                path="/view/:id"
                element={
                    <BoxContainer>
                        <SingleTeam />
                    </BoxContainer>
                }
            ></Route>
            <Route path="/edit/:id" element={<h1 style={{ marginTop: 100 }}>Editar equipo</h1>}></Route>
        </RoutesWithNotFound>
    );
}

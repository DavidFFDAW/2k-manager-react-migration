import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import RoutesWithNotFound from '../../../components/RoutesWithNotFound';
// import { PrivateRoutes } from '../../../models/routes';

const Teams = lazy(() => import('./Teams'));

export function TeamsRoutingModule() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Teams hasAdminPermission={true} />}></Route>
            <Route
                path="/new"
                element={
                    <BoxContainer>
                        <h1>Nuevo equipo Crear</h1>
                    </BoxContainer>
                }
            ></Route>
            <Route path="/view/:id" element={<h1 style={{ marginTop: 100 }}>Ver equipo</h1>}></Route>
            <Route path="/edit/:id" element={<h1 style={{ marginTop: 100 }}>Editar equipo</h1>}></Route>
        </RoutesWithNotFound>
    );
}

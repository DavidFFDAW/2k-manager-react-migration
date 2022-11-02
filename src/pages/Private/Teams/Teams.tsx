import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, Button, Fab } from '@mui/material';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import { TableSkeleton } from '../../../components/Table/TableSkeleton';
import { useFetchTeams } from './hooks/useFetchTeams';
import { ReusableTable } from '../../../components/Table/ReusableTable';
import { Team } from '../../../models/API';
import { Link } from 'react-router-dom';
import { makePrivateRoute } from '../../../utilities/private.route.utility';
import TableMenu from '../../../components/TableMenu/TableMenu';
import { MenuLink } from '../../../components/Links/Links';

export default function Champions({ hasAdminPermission }: any) {
    const { teams, isFetching } = useFetchTeams();
    const isAdmin = Boolean(hasAdminPermission) ? hasAdminPermission : false;

    if (isFetching) {
        return (
            <BoxContainer>
                <TableSkeleton />
            </BoxContainer>
        );
    }

    const head = ['Name', 'Average', 'Actions'];
    const tableRows: any = teams.map((team: Team) => {
        return [
            <Typography>{team.name}</Typography>,
            <Typography>{team.average}</Typography>,
            <TableMenu
                menus={[
                    <MenuLink to={`/teams/view/${team.id}`} label={'Ver ' + team.name} icon={<VisibilityIcon />} />,
                    isAdmin && (
                        <MenuLink to={`/teams/edit/${team.id}`} label={'Editar ' + team.name} icon={<EditIcon />} />
                    ),
                ]}
            />,
        ];
    });

    return (
        <>
            <BoxContainer title="Equipos">
                <ReusableTable head={head} rows={tableRows} />
            </BoxContainer>

            {isAdmin && (
                <Link to={makePrivateRoute('teams/new')}>
                    <Fab color="primary" aria-label="add" className="fab">
                        <AddIcon />
                    </Fab>
                </Link>
            )}
        </>
    );
}

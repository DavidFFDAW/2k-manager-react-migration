import { DashboardLink } from '../../../components/DashboardLink';
import { PrivateRoutes } from '../../../models/routes';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { BoxContainer } from '../../../components/DashboardLink/BoxContainer';
import { makePrivateRoute } from '../../../utilities/private.route.utility';

export default function Dashboard() {
    return (
        <div>
            <BoxContainer>
                <DashboardLink link={makePrivateRoute(PrivateRoutes.USER)} title="User" icon={<PersonIcon />} />
                <DashboardLink
                    link={makePrivateRoute(PrivateRoutes.CHAMPIONS)}
                    title="Campeones"
                    icon={<EmojiEventsIcon />}
                />
                <DashboardLink link={makePrivateRoute(PrivateRoutes.TEAMS)} title="Equipos" icon={<GroupsIcon />} />
            </BoxContainer>
        </div>
    );
}

import { DashboardLink } from '../../../components/DashboardLink';
import { PrivateRoutes } from '../../../models/routes';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import { makePrivateRoute } from '../../../utilities/private.route.utility';
import { Typography } from '@mui/material';
import { AppConfig } from '../../../AppConfig';

export default function Dashboard() {
    return (
        <div>
            <BoxContainer>
                <Typography component="div">Version {AppConfig.VERSION}</Typography>

                <DashboardLink link={makePrivateRoute(PrivateRoutes.USER)} title="User" icon={<PersonIcon />} />
                <DashboardLink
                    link={makePrivateRoute(PrivateRoutes.CHAMPIONS)}
                    title="Campeones"
                    icon={<EmojiEventsIcon />}
                />
                <DashboardLink link={makePrivateRoute(PrivateRoutes.TEAMS)} title="Equipos" icon={<GroupsIcon />} />
                <DashboardLink link={makePrivateRoute(PrivateRoutes.NEWS)} title="Posts" icon={<ArticleIcon />} />
            </BoxContainer>
        </div>
    );
}

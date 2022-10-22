import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getPersistedUserObject, removePersistedUserObject } from '../../services/auth.service';
import { PersistableUser } from '../../models/User';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, PrivateRoutes } from '../../models/routes';

export default function Header() {
    // const loggedUser: PersistableUser = getPersistedUserObject();
    const navigate = useNavigate();

    const logout = () => {
        removePersistedUserObject();
        navigate(`/${AppRoutes.LOGIN}`, { replace: true });
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={goBack}
                    >
                        <KeyboardBackspaceIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        2k Manager
                    </Typography>

                    {/* <Link to={PrivateRoutes.USER} className="link">
                        <Button color="inherit">{loggedUser.username}</Button>
                    </Link> */}

                    <Button color="inherit" onClick={logout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

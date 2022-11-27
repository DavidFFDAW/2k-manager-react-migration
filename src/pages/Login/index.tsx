import { Button, IconButton, InputAdornment, TextField } from '@mui/material';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';
import { emptyUserState, LoginUser } from '../../models/User';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, PrivateRoutes } from '../../models/routes';
import { useAuth } from '../../hooks/useAuth';
import { validateForm } from './validators/form.validator';
import { useSnackbar } from 'notistack';
import './custom.css';

export default function Login() {
    const [state, setState] = useState<LoginUser>({ ...emptyUserState, valid: false });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    const snackbar = useSnackbar();
    const auth = useAuth();

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!state.valid) return snackbar.enqueueSnackbar('Revisa los campos del formulario', { variant: 'error' });

        auth.tryLogInUser(state).then(() => {
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        });
    };

    const color = 'secondary';

    return (
        <>
            <div className="wallpaper"></div>

            <div className="login_container">
                <div className="login">
                    <h1>
                        <img src="/icons/icon-192x192.png" alt="" />
                    </h1>
                    <form action="" onSubmit={ev => submitForm(ev)} method="GET">
                        <div className="flex space column alg-start" style={{ height: '205px' }}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Email"
                                placeholder="example@email.com"
                                autoComplete="email"
                                aria-autocomplete="list"
                                color={color}
                                className="w-100 custom-input"
                                value={state.email}
                                onChange={e =>
                                    setState({ ...state, email: e.target.value, valid: validateForm(state) })
                                }
                                required
                                variant="filled"
                            />

                            <TextField
                                fullWidth
                                label="Contraseña"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                color={color}
                                className="w-100 custom-input"
                                autoComplete="current-password"
                                aria-autocomplete="list"
                                variant="filled"
                                value={state.password}
                                onChange={e =>
                                    setState({ ...state, password: e.target.value, valid: validateForm(state) })
                                }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ), // eslint-ignore-line // prettier-ignore
                                }}
                                required
                            />

                            <div className="w-100 flex space row">
                                <Link to={AppRoutes.REGISTER}>
                                    <Button variant="contained" color={color} className="w-100">
                                        Registrar
                                    </Button>
                                </Link>
                                <Button
                                    disabled={!state.valid}
                                    type="submit"
                                    variant="contained"
                                    color={color}
                                    endIcon={<SendIcon />}
                                >
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

import { Button, IconButton, InputAdornment, TextField } from '@mui/material';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';
import { emptyUserState, LoginUser } from '../../models/User';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { AppRoutes, PrivateRoutes } from '../../models/routes';
import { persistUserObject } from '../../services/auth.service';

export default function Login() {
    const [state, setState] = useState<LoginUser>(emptyUserState);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        persistUserObject({
            name: 'John Doe',
            email: 'example',
            token: '1234567890',
        });

        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    };

    const color = 'secondary';

    return (
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
                        className="w-100"
                        value={state.email}
                        onChange={e => setState({ ...state, email: e.target.value })}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        color={color}
                        className="w-100"
                        autoComplete="current-password"
                        aria-autocomplete="list"
                        value={state.password}
                        onChange={e => setState({ ...state, password: e.target.value })}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        required
                    />

                    <div className="w-100 flex space row">
                        <Link to={AppRoutes.REGISTER}>
                            <Button variant="outlined" color={color} className="w-100">
                                Registrar
                            </Button>
                        </Link>
                        <Button type="submit" variant="contained" color={color} endIcon={<SendIcon />}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

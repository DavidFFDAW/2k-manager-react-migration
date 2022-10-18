import { useState } from 'react';
import { Input } from '../../components/Input/input';
import { validateNotEmpty } from '../../components/Input/validators/input.validators';

export default function Login() {
    const [state, setState] = useState('');

    const validators = [validateNotEmpty];

    return (
        <div className="Home">
            <h1>Login</h1>
            <Input type="text" validators={validators} name={'Test'} setExternalValue={setState} />
            <div>{state}</div>
        </div>
    );
}

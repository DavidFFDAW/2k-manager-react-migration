import { InputBase } from '@mui/material';
import { useState } from 'react';
import { evaluate, Validator } from './validators/input.validators';

interface Props {
    type: string;
    name: string;
    validators: Validator[];
    setExternalValue: (value: string) => void;
    id?: string;
    children?: JSX.Element[] | JSX.Element;
    options?: [];
}

export function Input({ setExternalValue, validators, type, name, id, options }: Props) {
    const [value, setValueState] = useState('');
    const [error, setError] = useState({ error: false, message: '' });

    const handleChanges = (event: any) => {
        const value = event.target.value;
        const { hasError, message } = evaluate(validators, value);
        setExternalValue(value);
        setValueState(value);
        setError({ error: hasError, message });
    };

    return (
        <div className="input">
            <label>{name}</label>
            {/* <InputBase /> */}
            <input
                type={type}
                id={id}
                className={error.error ? 'tr-err' : 'er'}
                value={value}
                onChange={ev => handleChanges(ev)}
                {...options}
            />
            {error.error && <span className="error">{error.message}</span>}
        </div>
    );
}

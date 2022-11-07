import { useState } from 'react';
import { Add, Delete } from '@mui/icons-material';
import { WrestlerSelect } from '../../components/WrestlerSelect';
import { useNewTeam, useWrestlers } from './../../hooks/useNewTeam';
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export default function NewTeam() {
    const hook = useNewTeam();
    const { wrestlers } = useWrestlers();
    const [inputs, setInputs] = useState<number>(2);
    const iterable: any[] = [...Array.from({ length: inputs }).keys()];

    return (
        <>
            <form onSubmit={hook.submitForm}>
                <div className="panel down">
                    <h4>Datos</h4>

                    <TextField
                        fullWidth
                        type="text"
                        label="Nombre"
                        placeholder="The Judgement Day"
                        autoComplete="name"
                        aria-autocomplete="list"
                        color="primary"
                        className="w-100 custom-input c-i"
                        value={hook.team.name}
                        onChange={e => hook.updateName(e.target.value)}
                        required
                        variant="outlined"
                    />

                    <TextField
                        fullWidth
                        type="number"
                        inputMode="numeric"
                        label="Average"
                        placeholder="85"
                        color="primary"
                        className="w-100 custom-input c-i-d"
                        value={hook.team.average}
                        onChange={e => hook.updateAverage(Number(e.target.value))}
                        variant="outlined"
                    />
                </div>

                <div className="panel down">
                    <h4>Marca</h4>

                    <FormControl fullWidth className="c-i">
                        <InputLabel>Marca</InputLabel>
                        <Select
                            value={hook.team.brand}
                            label="Marca"
                            onChange={ev => hook.updateBrand(Number(ev.target.value))}
                            required
                        >
                            <MenuItem value={2}>SmackDown</MenuItem>
                            <MenuItem value={1}>RAW</MenuItem>
                            <MenuItem value={3}>Saturday Nigh Main Event</MenuItem>
                            <MenuItem value={4}>Womens Of Wrestling</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="panel down">
                    <h4>Miembros</h4>

                    {iterable.map((_, index) => (
                        <div key={index} className="flex space">
                            <WrestlerSelect
                                className="c-i-d"
                                value={hook.team.members[index]}
                                onChange={value => {
                                    hook.updateMembers(value, index);
                                }}
                                list={wrestlers.slice(index)}
                                label="Miembro"
                                required
                            />
                            {index >= 2 && (
                                <IconButton
                                    aria-label="delete"
                                    onClick={e => setInputs((previous: number) => previous - 1)}
                                >
                                    <Delete />
                                </IconButton>
                            )}
                        </div>
                    ))}

                    {inputs < 6 && (
                        <Button
                            className="c-i-d"
                            variant="outlined"
                            onClick={() => setInputs((previous: number) => previous + 1)}
                            startIcon={<Add />}
                        >
                            Nuevo miembro
                        </Button>
                    )}
                </div>

                <div className="flex center down">
                    <Button type="submit" className="c-i-d" variant="contained">
                        CREAR EQUIPO
                    </Button>
                </div>
            </form>
        </>
    );
}

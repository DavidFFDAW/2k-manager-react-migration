import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface WrestlerSelectProps {
    value: any;
    onChange: (value: any) => any;
    list: any[];
    label: string;
    className?: string;
    required?: boolean;
}

export function WrestlerSelect({ value, onChange, list, label, className, required }: WrestlerSelectProps) {
    if (!list || list.length === 0 || !Array.isArray(list)) {
        return null;
    }

    return (
        <FormControl fullWidth className={className}>
            <InputLabel>{label}</InputLabel>
            <Select required={required} value={value} label={label} onChange={ev => onChange(ev.target.value)}>
                {Array.isArray(list) && list.length > 0 ? (
                    list.map((wrestler: any) => (
                        <MenuItem key={wrestler.id} value={Number(wrestler.id)}>
                            {wrestler.name}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem value="eee">No hay luchadores</MenuItem>
                )}
            </Select>
        </FormControl>
    );
}

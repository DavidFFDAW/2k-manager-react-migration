import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface TableInterface {
    head: any[];
    rows: JSX.Element[];
}
export const tableImageSize = 55;

export function ReusableTable({ head, rows }: TableInterface): JSX.Element {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {head.map((item: any, index: number) => {
                            return <TableCell key={index}>{item}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any, ind: number) => (
                        <TableRow key={ind} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {row.map((item: any, index: number) => {
                                return <TableCell key={index}>{item}</TableCell>;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

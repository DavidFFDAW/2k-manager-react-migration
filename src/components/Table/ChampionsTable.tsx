import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Champion } from '../../models/API';

interface TableInterface {
    rows: Champion[];
}
const imageSize = 55;

export function ChampionsTable({ rows }: TableInterface): JSX.Element {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Img</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Times</TableCell>
                        <TableCell>Days</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, ind) => (
                        <TableRow key={ind} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <img width={imageSize} height={imageSize} src={row.championshipImage} alt="" />
                            </TableCell>
                            <TableCell align="left">{row.wrestlerName}</TableCell>
                            <TableCell align="left">{row.totalReigns}</TableCell>
                            <TableCell align="left">{row.totalDays}</TableCell>
                            <TableCell align="left">
                                {/* TODO: Finish adding button interaction */}
                                <Button>Boton</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

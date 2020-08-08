import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../ui/Title';

// Generate Order Data
function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: string) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'diário', 'Lavadora de Garrafas', 'Packaging 502'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', '2x turno', 'Lavadora de Garrafas', 'Packaging 502'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', '2x turno', 'Lavadora de Garrafas', 'Packaging XXY'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', '2x turno', 'Lavadora de Garrafas', 'Packaging XYZ'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'mensal', 'Empilhadeira', 'Packaging 502'),
];

function preventDefault(event: any) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Relatórios Recentes (Limpeza e Inspeção)</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>UserID</TableCell>
                        <TableCell>Período</TableCell>
                        <TableCell>Nome da Máquina</TableCell>
                        <TableCell align="right">Área</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver mais relatórios
                </Link>
            </div>
        </React.Fragment>
    );
}

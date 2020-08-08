import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../ui/Title';

function preventDefault(event: any) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Total de reports hoje</Title>
            <Typography component="p" variant="h4">
                321
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                em 15/03/2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    O que colocaremos aqui?
                </Link>
            </div>
        </React.Fragment>
    );
}

import React from 'react';
import clsx from 'clsx';
import { Box, Grid, Typography, Paper, Container } from '@material-ui/core';
import Deposits from './Deposits';
import Orders from './Orders';
import stylesDashboard from '../../styles/dashboard';
import Copyright from '../ui/Copyright';

const Dashboard = () => {
    const classes = stylesDashboard();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <Typography>Aqui podemos deixar um gráfico, recados, etc... Ou então remover né</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Dashboard;

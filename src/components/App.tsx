import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';
import Dashboard from './Dashboard/Dashboard';
import stylesDashboard from '../styles/dashboard';
import AppDrawer from './ui/AppDrawer';
import DefaultAppBar from './ui/DefaultAppBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import LimpezaInspecao from './LimpezaInspecao/LimpezaInspecao';

const App = () => {
    const [open, setOpen] = React.useState(false);
    const classes = stylesDashboard();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    axios.defaults.headers = {
        'Content-Type': 'application/json',
    };
    axios.defaults.baseURL = 'http://3.21.162.147:3333/';
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response) return Promise.reject(error.response);
            else return Promise.reject(error);
        }
    );

    return (
        <Router>
            <div className={classes.root}>
                <DefaultAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                        <Route path="/limp-insp">
                            <LimpezaInspecao />
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;

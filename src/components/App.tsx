import React from 'react';
import axios from 'axios';
import '../styles/App.css';
import Dashboard from './Dashboard/Dashboard';
import stylesDashboard from '../styles/dashboard';
import AppDrawer from './ui/AppDrawer';
import DefaultAppBar from './ui/DefaultAppBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LimpezaInspecao from './LimpezaInspecao/LimpezaInspecao';
import Login from './Login/Login';
import { initialUser } from '../constants';
import UserData from '../contexts/UserData';

const App = () => {
    const classes = stylesDashboard();
    const [open, setOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(initialUser);

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
            <Switch>
                <Route path="/login">
                    <UserData.Provider value={{ user: currentUser, setUser: setCurrentUser }}>
                        <Login />
                    </UserData.Provider>
                </Route>
                <div className={classes.root}>
                    <DefaultAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
                    <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Route path="/limp-insp">
                            <LimpezaInspecao />
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </main>
                </div>
            </Switch>
        </Router>
    );
};

export default App;

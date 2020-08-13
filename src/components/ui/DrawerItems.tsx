import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Filter5Icon from '@material-ui/icons/Filter5';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Início" />
        </ListItem>
        <ListItem button component={Link} to="/limp-insp">
            <ListItemIcon>
                <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Limpeza e Inspeção" />
        </ListItem>
        <ListItem button component={Link} to="/lubrificacao">
            <ListItemIcon>
                <PermDataSettingIcon />
            </ListItemIcon>
            <ListItemText primary="Lubrificação" />
        </ListItem>
        <ListItem button component={Link} to="/5w">
            <ListItemIcon>
                <Filter5Icon />
            </ListItemIcon>
            <ListItemText primary="5 Porquês" />
        </ListItem>
    </div>
);

export const adminListItems = (
    <div>
        <ListSubheader inset>Administrar</ListSubheader>
        <ListItem button component={Link} to="/checks">
            <ListItemIcon>
                <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastro de Checks" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Report Importante" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Adm. Usuários" />
        </ListItem>
    </div>
);

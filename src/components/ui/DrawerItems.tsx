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

export const mainListItems = (
    <div>
        <ListItem button component="a" href="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Início" />
        </ListItem>
        <ListItem button component="a" href="/limp-insp">
            <ListItemIcon>
                <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Limpeza e Inspeção" />
        </ListItem>
        <ListItem button component="a" href="/lubrificacao">
            <ListItemIcon>
                <PermDataSettingIcon />
            </ListItemIcon>
            <ListItemText primary="Lubrificação" />
        </ListItem>
        <ListItem button component="a" href="/5w">
            <ListItemIcon>
                <Filter5Icon />
            </ListItemIcon>
            <ListItemText primary="5W" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Reports Padrão</ListSubheader>
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
            <ListItemText primary="Report Y" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Report XX" />
        </ListItem>
    </div>
);

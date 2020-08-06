import React, { FC } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './DrawerItems';
import { Drawer, List, IconButton, Divider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import stylesDashboard from '../../styles/dashboard';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
interface PropsAppDrawer {
    open: boolean;
    handleDrawerClose: () => void;
}

type AllProps = PropsAppDrawer;

const AppDrawer: FC<AllProps> = (props: AllProps) => {
    const classes = stylesDashboard();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <ImportantDevicesIcon className={classes.drawerIcon} />
                <Typography noWrap>Smart Maintenance</Typography>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
    );
};

export default AppDrawer;

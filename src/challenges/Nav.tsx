import { Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Link } from "@material-ui/core";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppsIcon from '@material-ui/icons/Apps';
import { Styles } from "./Styles";
import HomeIcon from '@material-ui/icons/Home';

interface NavBarProps{
  page: string;
  siteTitle: string;
}

export const Nav: React.FC<NavBarProps> = (props): React.ReactElement => {
    const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
    const classes = Styles();

    const onNavOpen = React.useCallback(() => {
      setIsNavOpen(true);
    }, []);

    const onNavClose = React.useCallback(() => {
      setIsNavOpen(false);
    }, []);

    return (
      <>
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={onNavOpen} edge="start" color="inherit" aria-label="menu" className={classes.icon}>
              <AppsIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            {props.page}
          </Typography>
          <Typography className={classes.siteTitle}>
            <Link href='https://cavanpage.com' color="inherit">{props.siteTitle}</Link>  
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isNavOpen} onClose={onNavClose}>
          <List className={classes.navList}>
            <ListItem button> 
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary={'HOME'} />
            </ListItem>
          </List>
      </Drawer>
      </>
    )
}
import { Typography } from "@material-ui/core";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppsIcon from '@material-ui/icons/Apps';

interface MyAppBarProps{
  iconClassName?: string;
  text?: string;
}

export default function MyAppBar(props: MyAppBarProps){
    return (
        <AppBar position="relative">
        <Toolbar>
          <AppsIcon className={props.iconClassName} />
          <Typography variant="h6" color="inherit" noWrap>
            {props.text}
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
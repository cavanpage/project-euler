import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Copyright } from "./Copyright";

const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function Footer(){
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Don't let everything fail</Typography>
          <Copyright />
        </Container>
      </footer>
    )
}
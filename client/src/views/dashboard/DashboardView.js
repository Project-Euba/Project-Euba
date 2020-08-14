import React from "react";
import { makeStyles } from "@material-ui/core";
import Page from "../../components/Page";

let useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const DashboardView = () => {
  const classes = useStyles();
  return (<Page className={classes.root} title="Dashboard"></Page>);
};

export default DashboardView;

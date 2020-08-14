import React from "react";
import { makeStyles } from "@material-ui/core";
import Page from "../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  }
}));

const TemplateView = (props) => {
  return (
    <Page className={classes.root} title="Template"></Page>
  )
}

export default TemplateView;

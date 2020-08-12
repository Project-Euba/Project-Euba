import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Outlet, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SideNavigationBar from "./SideNavigationBar";
import TopToolbar from "./TopToolbar";
import Loading from "../../views/loading/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = () => {
  // Checks if the user is logged in
  // If they aren't, send them to the login route
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem("login_token");
  useEffect(() => {
    // Checks if the token exists
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <div className={classes.root}>
      <TopToolbar />
      <SideNavigationBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

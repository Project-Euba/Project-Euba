import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  colors,
} from "@material-ui/core";
import { BarChart as BarChartIcon, Archive as ArchiveIcon } from "react-feather";
import SideNavigationItem from "./SideNavigationItem";
import VersionNumber from "../../../components/VersionNumber";

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/inventory",
    icon: ArchiveIcon,
    title: "Inventory"
  }
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    backgroundColor: theme.palette.background.default,
    width: 256,
    top: 64,
    borderRight: "1px solid " + colors.grey[800],
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const SideNavigationBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      {/* <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        textAlign='center'
        p={2}
        className={classes.box}
      >
        <Typography
          color='textPrimary'
          variant='h4'
        >
          Project Euba
        </Typography>
        <VersionNumber />
      </Box>
      <Divider /> */}
      <Box p={2}>
        <List>
          {items.map((item) => (
            <SideNavigationItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Hidden>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
};

SideNavigationBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

SideNavigationBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default SideNavigationBar;

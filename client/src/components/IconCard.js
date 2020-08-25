import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "180px"
  },
  icon: {
    fontSize: 80
  },
  gridItem: {
    flex: 1
  },
  cardContent: {
    minHeight: "180px"
  }
}));

// A simple card that displays an icon and
// a value along with a description underneath
const IconCard = ({ icon: Icon, className, iconClass, value, description, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.cardContent}>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.cardContent}>
          <Grid item className={classes.gridItem}>
            {Icon && <Icon className={clsx(classes.icon, iconClass)} /> }
          </Grid>
          <Grid container item direction="column" justify="center" alignItems="center" className={classes.gridItem}>
            <Grid item className={classes.gridItem}>
              <Typography variant="h1" color="textPrimary">
                {value.toString()}
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography variant="h5" color="textSecondary">
                {description.toString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default IconCard;

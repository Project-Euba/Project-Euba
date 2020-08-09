import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const NotFoundView = () => {
  const classes = useStyles();
  return (
  <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      alignItems='center'
      className={classes.root}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textSecondary"
          variant="h1"
        >
          404: Not Found!
        </Typography>
      </Container>
    </Box>
  );
}

export default NotFoundView;


import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import theme from './theme';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles'
import './App.css';

const App = () => {
    const routing = useRoutes(routes);
    return (
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
    );
}

export default App;
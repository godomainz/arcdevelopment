import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;

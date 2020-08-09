import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/ligth';
import dark from './styles/themes/dark';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('light', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  },[theme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

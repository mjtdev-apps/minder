import React, { useState, useMemo, useEffect } from 'react';
import { CssBaseline, ThemeProvider, IconButton, Tooltip } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Set theme based on system preference or default to dark
    if (systemPrefersDark) {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }, [systemPrefersDark]);

  const theme = useMemo(() => (themeMode === 'dark' ? darkTheme : lightTheme), [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Tooltip title={`Switch to ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`}>
        <IconButton
          onClick={toggleTheme}
          sx={{ position: 'fixed', top: 10, right: 10 }}
          color="inherit"
        >
          {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;

import {createContext, useContext, useState, useMemo, useCallback} from 'react';
import {ThemeProvider as MuiThemeProvider, createTheme} from '@mui/material/styles';
import {PaletteMode} from '@mui/material';

import {colors} from 'shared/colors';
import {ThemeContextType, ThemeProviderProps} from './types';
import {DEFAULT_THEME} from './constants';
import {getStoredTheme, setStoredTheme} from './utils';

const ThemeContext = createContext<ThemeContextType>({
  mode: DEFAULT_THEME,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(getStoredTheme);

  const toggleTheme = useCallback(() => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      setStoredTheme(newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: colors.primary,
          secondary: colors.secondary,
          background: {
            default: colors.background[mode].default,
            paper: colors.background[mode].paper,
          },
          text: {
            primary: colors.text[mode].primary,
            secondary: colors.text[mode].secondary,
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
          },
          h2: {
            fontSize: '2rem',
            fontWeight: 600,
          },
          h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
          },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                backgroundColor: colors.overlay[mode].backdrop,
                backdropFilter: 'blur(8px)',
                boxShadow:
                  mode === 'dark'
                    ? '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                border: 'none',
                backgroundColor: colors.overlay[mode].backdrop,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
                padding: '8px 16px',
              },
            },
          },
          MuiListItem: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                margin: '4px 8px',
                '&:hover': {
                  backgroundColor: colors.overlay[mode].hover,
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

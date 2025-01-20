import {PaletteMode} from '@mui/material';
import {ReactNode} from 'react';

export type ThemeContextType = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};

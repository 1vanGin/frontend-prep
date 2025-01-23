import {PaletteMode} from '@mui/material';
import {DEFAULT_THEME, THEME_KEY} from './constants';

export const getStoredTheme = (): PaletteMode => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return (storedTheme as PaletteMode) || DEFAULT_THEME;
};

export const setStoredTheme = (theme: PaletteMode): void => {
  localStorage.setItem(THEME_KEY, theme);
};

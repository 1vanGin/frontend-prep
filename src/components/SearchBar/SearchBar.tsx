import React from 'react';
import {TextField} from '@mui/material';

import {TSearchBarProps} from './types';

function SearchBar({onSearch}: TSearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField fullWidth variant="outlined" placeholder="Search questions..." onChange={handleChange} sx={{mb: 2}} />
  );
}

export default SearchBar;

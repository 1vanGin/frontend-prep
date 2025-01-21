import {CircularProgress, Box} from '@mui/material';

import {useTheme} from 'theme/ThemeContext';
import {colors} from 'shared/colors';

const Loader = () => {
  const {mode} = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
        backgroundColor: colors.overlay[mode].backdrop,
        backdropFilter: 'blur(8px)',
        borderRadius: 3,
      }}
    >
      <CircularProgress
        sx={{
          color: 'primary.main',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />
    </Box>
  );
};

export default Loader;

import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';
import {useTheme} from 'theme/ThemeContext';
import {colors} from 'shared/colors';

const NotFoundPage: React.FC = () => {
  const {mode} = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '120px',
          fontWeight: 700,
          margin: 0,
          color: colors.text[mode].primary,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: '32px',
          fontWeight: 500,
          my: 2,
          color: colors.text[mode].secondary,
        }}
      >
        Страница не найдена
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '18px',
          color: colors.text[mode].secondary,
          mb: 3,
          maxWidth: '500px',
        }}
      >
        Извините, страница, которую вы ищете, не существует или была перемещена.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: colors.button[mode].primary,
          color: colors.button[mode].text,
          padding: '10px 24px',
          fontSize: '16px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: colors.button[mode].hover,
          },
        }}
      >
        Вернуться на главную
      </Button>
    </Box>
  );
};

export default NotFoundPage;

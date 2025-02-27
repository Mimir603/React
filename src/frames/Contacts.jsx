import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 1526,
        height: 1002,
        position: 'relative',
        backgroundColor: '#F3E04E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: 60,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 900,
          letterSpacing: 3,
          color: 'black',
          mb: 2,
        }}
      >
        Contacts
      </Typography>

      <Box
        sx={{
          width: 719,
          height: 363,
          backgroundColor: '#FFFDFD',
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            letterSpacing: 1.6,
            color: 'black',
            textAlign: 'center',
          }}
        >
          Если вам все-таки понравилось мое портфолио, можете связаться со мной следующим способом:
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="/Whatsapp.jpeg"
          alt="whatsapp"
          sx={{ width: 71, height: 71}}
        />
        <Box
          component="img"
          src="/Telegram.png"
          alt="Контакт 2"
          sx={{ width: 71, height: 71, borderRadius: '50%' }}
        />
        <Box
          component="img"
          src="/Discord.png"
          alt="Контакт 3"
          sx={{ width: 71, height: 71, borderRadius: '25%' }}
        />
        <Box
          component="img"
          src="/gmail.png"
          alt="Контакт 4"
          sx={{ width: 71, height: 53, borderRadius: '15%' }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{ mt: 4 }}
      >
        Назад
      </Button>
    </Box>
  );
};

export default Contacts;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Portfolio = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background: 'white',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '1949.26px',
          top: '540.13px',
        }}
      >
        <svg width="479" height="616" viewBox="0 0 479 616" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M579.632 606.955L0.0548271 785.242L558.862 0.931836L579.632 606.955Z" fill="#E61418" />
        </svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '-522px',
          top: '179.85px',
        }}
      >
        <svg width="712" height="482" viewBox="0 0 712 482" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.3152 -104.573L711.581 -11.3065L-276.234 481.335L48.3152 -104.573Z" fill="#3DEC8C" />
        </svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '692.67px',
          top: '1455.74px',
        }}
      >
        <svg width="793" height="505" viewBox="0 0 793 505" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.3127 654.567L-316.897 0.935359L792.228 527.78L52.3127 654.567Z" fill="#14EAFA" />
        </svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '883.57px',
          top: '-401px',
        }}
      >
        <svg width="720" height="392" viewBox="0 0 720 392" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M627.027 -159.751L952.437 391.786L0.756119 -26.069L627.027 -159.751Z" fill="#F3E04E" />
        </svg>
      </Box>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          left: '56.06px',
          top: '202.96px',
          transform: 'rotate(-27deg)',
          transformOrigin: 'top left',
          color: 'black',
          fontSize: '60px',
          fontWeight: 900,
          letterSpacing: '3px',
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          left: '514px',
          top: '333px',
          color: 'black',
          fontSize: '48px',
          fontWeight: 900,
          letterSpacing: '2.4px',
          lineHeight: '50px',
        }}
      >
        Здравствуйте, меня зовут Артур! И это мое собственное портфолио, которое поможет вам со мной познакомится.
      </Typography>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          left: '1312px',
          top: '913.26px',
          transform: 'rotate(-55deg)',
          transformOrigin: 'top left',
          color: 'black',
          fontSize: '60px',
          fontWeight: 900,
          letterSpacing: '3px',
        }}
      >
        Report
      </Typography>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          left: '118.46px',
          top: '798px',
          transform: 'rotate(26deg)',
          transformOrigin: 'top left',
          color: 'black',
          fontSize: '60px',
          fontWeight: 900,
          letterSpacing: '3px',
        }}
      >
        Portfolio
      </Typography>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          left: '1181.67px',
          top: '34px',
          transform: 'rotate(24deg)',
          transformOrigin: 'top left',
          color: 'black',
          fontSize: '60px',
          fontWeight: 900,
          letterSpacing: '3px',
        }}
      >
        Contacts
      </Typography>
    </Box>
  );
};

export default Portfolio;

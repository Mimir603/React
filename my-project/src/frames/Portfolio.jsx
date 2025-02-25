import React from 'react';
import { Box, Typography } from '@mui/material';

const Portfolio = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'white',
      }}
    >
      {/* Верхний левый треугольник */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '45%',
          height: '35%',
          background: '#3DEC8C',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '12%',
          left: '2%',
          transform: 'rotate(-38deg)',
          fontSize:70,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: '5%',
          lineHeight: '28px',
          color: 'black',
        }}
      >
        About Me
      </Typography>
      
      {/* Верхний правый треугольник */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '24%',
          background: '#F3E04E',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          transform: 'rotate(18deg)',
          fontSize: 70,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: '5%',
          lineHeight: '28px',
          color: 'black',
        }}
      >
        Contacts
      </Typography>

      {/* Нижний левый треугольник */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40%',
          height: '20%',
          background: '#14EAFA',
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          bottom: '6%',
          left: '6%',
          transform: 'rotate(8deg)',
          fontSize: 70,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: '5%',
          lineHeight: '28px',
          color: 'black',
        }}
      >
        Portfolio
      </Typography>

      {/* Нижний правый треугольник */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '50%',
          height: '30%',
          background: '#E61418',
          clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          transform: 'rotate(-25deg)',
          fontSize: 70,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: '5%',
          lineHeight: '28px',
          color: 'black',
        }}
      >
        Report
      </Typography>

      {/* Текст в центре */}
      <Typography
        sx={{
          textAlign: 'center',
          maxWidth: '40%',
          fontSize: 70,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: '2%',
          lineHeight: '135px',
          color: 'black',
        }}
      >
        Здравствуйте, меня зовут Артур! И это мое собственное портфолио, которое поможет вам со мной познакомиться.
      </Typography>
    </Box>
  );
};

export default Portfolio;

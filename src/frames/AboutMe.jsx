import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 1526,
        height: 1002,
        position: 'relative',
        backgroundColor: '#3DEC8C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: 82,
          left: 92,
          fontSize: 60,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: 3,
          color: 'black',
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          width: 388,
          height: 599,
          position: 'absolute',
          left: 138,
          top: 318,
          backgroundColor: 'white',
          borderRadius: 3,
        }}
      />

      <Box
        sx={{
          width: 388,
          height: 599,
          position: 'absolute',
          left: 1036,
          top: 91,
          backgroundColor: 'white',
          borderRadius: 3,
        }}
      />

      <Typography
        sx={{
          position: 'absolute',
          left: 165,
          top: 353,
          width: 335,
          fontSize: 30,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: 1.2,
          color: 'black',
        }}
      >
        Меня зовут Мердиросян Артур, мне 16 лет (почти 17). И чуть больше года уже занимаюсь в ITStep academy.
        За время обучения я прошел массу предметов, из которых я могу отметить JS, SQL, HTML/CSS.
      </Typography>

      <Typography
        sx={{
          position: 'absolute',
          left: 1066,
          top: 108,
          width: 341,
          fontSize: 30,
          fontFamily: 'Andale Mono, monospace',
          fontWeight: 900,
          letterSpacing: 1.2,
          color: 'black',
        }}
      >
        Моя мечта – стать учителем, но, к сожалению, я разрываюсь на счёт того, чему собираюсь обучать. В будущем
        собираюсь переехать в Австрию, по крайней мере для обучения в местном университете.
      </Typography>

      <Box
        component="img"
        src="/Arthur.png"
        alt="Мое фото"
        sx={{
          width: 300,
          height: 300,
          borderRadius: "10%",
          display: "block",
          margin: "0 auto",
        }}
      />

      <Box sx={{ position: 'absolute', bottom: 30 }}>
        <Button variant="contained" color="#12924c" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </Box>
    </Box>
  );
};

export default AboutMe;

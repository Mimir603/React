import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {
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
          fontFamily: 'Inter',
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
          fontSize: 32,
          fontFamily: 'Inter',
          fontWeight: 900,
          letterSpacing: 1.6,
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
          top: 98,
          width: 341,
          fontSize: 32,
          fontFamily: 'Inter',
          fontWeight: 900,
          letterSpacing: 1.6,
          color: 'black',
        }}
      >
        Моя мечта – стать учителем, но, к сожалению, я разрываюсь на счёт того, чему собираюсь обучать. В будущем
        собираюсь переехать в Австрию, по крайней мере для обучения в местном университете.
      </Typography>

      <Box
        component="img"
        src="my-project/images/IMG_20231107_185601_036 (1).png"
        alt="Profile Picture"
        sx={{
          position: 'absolute',
          left: 625,
          top: 318,
          width: 312,
          height: 312,
          borderRadius: 3,
        }}
      />
    </Box>
  );
};

export default AboutMe;

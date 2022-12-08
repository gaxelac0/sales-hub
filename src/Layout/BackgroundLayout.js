import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Componente para normalizar los estilos de la aplicacion en todas sus paginas
// Recibe el componente a mostrar como props.component
const BackgroundLayout = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        display="flex"
        bgcolor="#ffcc00"
        justifyContent={"center"}
        width="full"
        height="full"
        alignItems="center"
        px={8}
      >

          <Box transition=".3s ease" bgcolor={"ffcc00"}>
            <Box
              
              px={8}
              py={4}
              sx={{ borderRadius: '16px' }}
              bgcolor="white"
              w={"100%"}
              marginTop={"1em"}
              marginBottom={"1em"}
            >
              {/*history bar*/}
  {/*             <Button mb="3" onClick={() => navigate(-1)}>
                <ArrowBackIcon />
              </Button> */}
              {/*Componente a mostrar*/}
              {props.component}
            </Box>
          </Box>

      </Box>
    </>
  );
};

export default BackgroundLayout;

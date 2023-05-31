import { Box, IconButton, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {Link} from 'react-router-dom'
import React from 'react';
const Topbar = ({colorMode,setColorMode}) => {
  //const colors = tokens(theme.palette.mode);

  function handleChange(){
    let temp = colorMode
    temp === 'dark' ? setColorMode('light') : setColorMode('dark')
  }

  return (
    <Box sx={{pl:1,pr:1,pt:1}} display="flex" justifyContent="space-between" alignItems='center'>
      {/* Name/Logo Location */}
      <Box
        display="flex"
      >
        <Link to='/' >
          <Typography 
            variant='h5'
            color='primary'
          >
            {process.env.REACT_APP_APP_NAME}
          </Typography>
        </Link>
      </Box>

      {/* Color Mode Toggle */}
      <Box display="flex">
        <IconButton onClick={handleChange}>
          {colorMode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

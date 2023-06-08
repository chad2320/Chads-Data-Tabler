import { Box, IconButton, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchSearchBar from "../../components/general/searchSearchBar";
import {Link} from 'react-router-dom'
import React from 'react';
const Topbar = ({colorMode,setColorMode}) => {
  //const colors = tokens(theme.palette.mode);

  function handleChange(){
    let temp = colorMode
    temp === 'dark' ? setColorMode('light') : setColorMode('dark')
  }

  return (
    <Box 
      sx={{p:1}} 
      display="flex" 
      justifyContent="space-between" 
      alignItems='center'
    >
      {/* Name/Logo Location */}
      
      <Link to='/' >
        <Typography 
          variant='h5'
          color='secondary'
        >
          {process.env.REACT_APP_APP_NAME}
        </Typography>
      </Link>

      {(process.env.REACT_APP_Search === 'true')? <SearchSearchBar/> : null}

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

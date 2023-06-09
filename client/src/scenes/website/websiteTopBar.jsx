import { Box, IconButton, Typography,Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchSearchBar from "../../components/general/searchSearchBar";
import {Link} from 'react-router-dom'
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {useGuideInformation} from '../../utils/useGuides'

const Topbar = ({colorMode,setColorMode}) => {
  const { guide, setGuide } = useGuideInformation();

  return (
    <Box 
      sx={{p:1}} 
      display="flex" 
      justifyContent="space-between" 
      alignItems='center'
      backgroundColor='neutral.main'
    >
      {/* Name/Logo Location */}
      
      <Link to='/' >
        <Typography 
          noWrap
          variant='h5'
          color='secondary'
        >
          {process.env.REACT_APP_APP_NAME}
        </Typography>
      </Link>

      {(process.env.REACT_APP_Search === 'true')? <SearchSearchBar/> : null}

      {/* Color Mode Toggle */}
      <Box display="flex">
        <Tooltip 
          title={guide.enabled ? 'Disable Guides' : 'Enable Guides'}
          placement='left'
        >
          <IconButton onClick={()=>setGuide('enabled',!guide.enabled)}>
            <InfoIcon/>
          </IconButton>
        </Tooltip>
        <IconButton onClick={()=>colorMode === 'dark' ? setColorMode('light') : setColorMode('dark')}>
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

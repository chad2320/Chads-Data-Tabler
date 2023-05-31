import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography,Tooltip } from '@mui/material';
import React from 'react';

const RangeSlider = (props) => {
    let {dbName,title,limits,data,step,modifyData} = props
    
    const handleChange = (event, newValue) => {
        modifyData(dbName,'data',newValue);
        //console.log(newValue)
    }

    return(
    <Box 
      sx={{
        width:150,
        m:0.5,
        pr:1.5,
        pl:1.5,
        pt:0.25,
        border:1,
        borderRadius:"5px",
        borderColor:"primary.main"
      }}
    >
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems='center'
      >
        <Tooltip title={title}>
          <Typography 
            noWrap={true}
            variant="h6" 
            color='text'
            >
            {title}
          </Typography>
        </Tooltip>
        
      </Box>
      <Slider
        getAriaLabel={() => 'Age Range'}
        min= {limits[0]}
        max={limits[1]}
        value={data}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color='primary'
        step={step}
      />
    </Box>
    )

}

export default RangeSlider
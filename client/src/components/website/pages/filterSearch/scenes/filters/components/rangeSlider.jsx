import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography,Tooltip } from '@mui/material';
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { modifySingleFilter } from '../../../../../../../features/search/filterSearch/filterSearchSlice';

const RangeSlider = ({path}) => {
    const dispatch = useDispatch()
    
    //Import the relevent data under the alias data through destructuring
    const { filtersData:{controlsObject:{ [path]: data }}} = useSelector((store) => store.filterSearch)

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
        <Tooltip title={data.title}>
          <Typography 
            noWrap={true}
            variant="h6" 
            color='text'
            >
            {data.title}
          </Typography>
        </Tooltip>
        
      </Box>
      <Slider
        getAriaLabel={() => 'Age Range'}
        min= {data.limits[0]}
        max={data.limits[1]}
        value={data.data}
        onChange={(event,newValue)=>
          dispatch(modifySingleFilter({
            id:data.path,
            key:'data',
            value:newValue,
        }))}
        valueLabelDisplay="auto"
        color='primary'
        step={data.step}
      />
    </Box>
    )

}

export default RangeSlider
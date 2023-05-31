import { Box, Typography} from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import React from 'react';
import { useSearch } from "../../../../utils/filterSearch";

const Pages = () => {

    const {searchCountTotal,searchDatabase,controls,setControls,
    } = useSearch()

    function handleChange(x){
        let temp = controls
        if(x === -1 && temp.page !== 0){
            temp.page += x}
        else if(x === 1){
            temp.page += x}
        setControls(temp)
        searchDatabase(false)
    }
    

    return (
        <Box sx={{minHeight:'10px', minWidth:'118px',mr:1}}
            display='flex' alignItems='center'>
                <Typography variant='h5'>Page:</Typography>
                <IconButton onClick={()=>handleChange(-1)}><ArrowBackIosNewIcon/></IconButton>
                <Typography variant='h5'>{controls.page}</Typography>
                {/* Check if we should even allow going to next page. */}
                {searchCountTotal <= ((controls.page +1)*controls.limit) ?
                null :<IconButton onClick={()=>handleChange(1)}><ArrowForwardIosIcon></ArrowForwardIosIcon></IconButton>
                }
        </Box>
    )}


export default Pages
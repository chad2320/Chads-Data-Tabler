import { Box, Typography} from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import { getTableData , modifyControls } from "../../../../features/search/filterSearch/filterSearchSlice";

const Pages = () => {
    const dispatch = useDispatch()
    const {searchCountTotal,controls} = useSelector((store) => store.filterSearch)

    function handleChange(x){
        if(x === -1 && controls.page !== 0){
            dispatch(modifyControls({
                key:'page',
                value: controls.page - 1
            }))
            dispatch(getTableData())
        }
        else if(x === 1){
            dispatch(modifyControls({
                key:'page',
                value: controls.page + 1
            }))
            dispatch(getTableData())
        }
    }
    

    return (
        <Box 
            sx={{minHeight:'10px', minWidth:'118px',mr:1}}
            display='flex' 
            alignItems='center'
        >
                <Typography variant='h5'>Page:</Typography>

                <IconButton onClick={()=>handleChange(-1)}>
                    <ArrowBackIosNewIcon/>
                </IconButton>
                
                <Typography variant='h5'>{controls.page}</Typography>

                {/* Check if we should even allow going to next page. */}
                {searchCountTotal <= ((controls.page +1)*controls.limit) ?
                null 
                :
                <IconButton onClick={()=>handleChange(1)}>
                    <ArrowForwardIosIcon/>
                </IconButton>
                }
        </Box>
    )}


export default Pages
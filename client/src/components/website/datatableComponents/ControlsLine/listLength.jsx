import React from 'react';
import { Box, Typography} from "@mui/material"
import { useState} from "react";
import { Button } from '@mui/material'
import { useSearch } from "../../../../utils/filterSearch";


const ListLength = () => {
    const {searchCountTotal,searchDatabase,controls,setControls} = useSearch()
    const [clicked,setClicked] = useState(10)

    function handleClick(x){
        let temp = controls
        temp.limit = x
        temp.page = 0
        setClicked(x)
        setControls(temp)
        searchDatabase(false)
    }

    return (
        <Box sx={{minHeight:'10px', minWidth:'10px',ml:1}}
        display='flex' justifyContent='space-between' alignItems='center'>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Typography
                    sx={{mr:1,ml:0.5}}
                    color='text.main'
                    variant='h5'
                >
                    Limit:
                </Typography>
    
                <Button 
                sx={{width:30}}
                    style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}} 
                    variant='contained' 
                    onClick={()=>{handleClick(10)}} 
                    color={clicked === 10? 'secondary':'primary'}
                >
                    10
                </Button>
                {(searchCountTotal > 10) ?
                    <Button 
                        style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}}  
                        variant='contained' 
                        onClick={()=>{handleClick(20)}} 
                        sx={{ml:0.5, mr:0.5}}
                        color={clicked === 20? 'secondary':'primary'}
                    >
                        20
                    </Button>
                    : null
                }
                {(searchCountTotal > 20) ?
                
                <Button 
                    style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}}
                    variant='contained' 
                    onClick={()=>{handleClick(30)}} 
                    color={clicked === 30? 'secondary':'primary'}
                >
                    30
                </Button>
                :null
                }
            </Box>
        </Box>
    )}


export default ListLength
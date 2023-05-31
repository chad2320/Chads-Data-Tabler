import { Box, Typography} from "@mui/material"
import { useState} from "react";
import { Button } from '@mui/material'
import React from 'react';


const ListLength = (props) => {
    const {controls,setControls} = props
    const [clicked,setClicked] = useState(10)
    const {searchCountTotal,searchDatabase} = props

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
                {(searchCountTotal > 0) ?
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
                        variant={clicked === 10? 'contained':'outlined'} 
                        onClick={()=>{handleClick(10)}} 
                        color='primary.main'
                    >
                        10
                    </Button>
                    {(searchCountTotal > 10) ?
                        <Button 
                            style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}}  
                            variant={clicked === 20? 'contained':'outlined'} 
                            onClick={()=>{handleClick(20)}} 
                            sx={{ml:0.5, mr:0.5}}
                            color='primary.main'
                        >
                            20
                        </Button>
                        : null
                    }
                    {(searchCountTotal > 20) ?
                    
                    <Button 
                        style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}}
                        variant={clicked === 30? 'contained':'outlined'} 
                        onClick={()=>{handleClick(30)}} 
                        color='primary.main'
                    >
                        30
                    </Button>
                    :null
                    }
                </Box>
                :null
            }
            </Box>
            
    )}


export default ListLength
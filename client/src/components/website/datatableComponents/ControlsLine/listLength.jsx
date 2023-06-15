import React from 'react';
import { Box, Typography} from "@mui/material"
import { Button } from '@mui/material'
import { useSelector , useDispatch } from 'react-redux';
import { getTableData , modifyControls } from '../../../../features/search/filterSearch/filterSearchSlice';

const ListLength = () => {
    const dispatch = useDispatch()
    const {searchCountTotal,controls} = useSelector((store)=>store.filterSearch)

    function handleClick(x){
        dispatch(modifyControls({
            key:'limit',
            value:x
        }))
        dispatch(modifyControls({key:'page',value:0}))
        dispatch(getTableData())
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
                    color={controls.limit === 10? 'secondary':'primary'}
                >
                    10
                </Button>
                {(searchCountTotal > 10) ?
                    <Button 
                        style={{maxWidth: 45, maxHeight: 25, minWidth: 45, minHeight: 25}}  
                        variant='contained' 
                        onClick={()=>{handleClick(20)}} 
                        sx={{ml:0.5, mr:0.5}}
                        color={controls.limit === 20? 'secondary':'primary'}
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
                    color={controls.limit === 30? 'secondary':'primary'}
                >
                    30
                </Button>
                :null
                }
            </Box>
        </Box>
    )}


export default ListLength
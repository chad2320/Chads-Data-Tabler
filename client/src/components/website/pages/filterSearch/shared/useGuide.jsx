import React from 'react';
import { Box,Button,Fade, Typography} from "@mui/material"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch } from 'react-redux';
import { toggleUserGuideEnabled } from '../../../../../features/userGuide/userGuideSlice';

const ExplainerSection = ({text,arrow,guideButton}) => {
    const dispatch = useDispatch()

    return (
        <Fade in timeout={3000}>
            <Box
                display='flex'
                flexDirection='row'
                sx={{ml:2}}
            >
                {arrow ?
                    <ShortcutIcon 
                        color='secondary'
                        sx={{transform:'rotate(270deg)',fontSize:'4em'}}
                    />
                :
                    null
                }
                
                <Box
                    display='flex'
                    flexDirection='column'
                >
                    <Box
                        sx={{
                            border:2,
                            borderRadius:5,
                            borderColor:'secondary.main',
                            mt:3,
                            mb:0.5,
                            p:1
                        }}
                    >
                       
                        <Typography variant='h4'>
                            {text}
                        </Typography>
                        
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='flex-end'
                    >
                        {guideButton ?
                        <Button
                            size='small'
                            variant='contained'
                            color='secondary'
                            sx={{width:125,p:0.2,mr:2}}
                            onClick={()=>{
                                dispatch(toggleUserGuideEnabled())
                            }}
                        >
                            Turn Off Guides {<InfoIcon sx={{ml:0.2,fontSize:14}}/>}
                        </Button>
                        :
                        null
                        }
                        
                    </Box>
                </Box>
            </Box>
        </Fade> 
    )
}

export default ExplainerSection
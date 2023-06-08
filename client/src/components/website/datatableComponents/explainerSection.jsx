import React from 'react';
import { Box,Fade, Typography} from "@mui/material"
import ShortcutIcon from '@mui/icons-material/Shortcut';

const ExplainerSection = () => {
    return (
        <Fade in timeout={3000}>
            <Box 
                display='flex'
                flexDirection='row'
                justifyContent='space-around'
                sx={{width:'100%'}}
            >
                <Box
                    display='flex'
                    flexDirection='row'
                    sx={{width:'48%',ml:2}}
                >
                    <ShortcutIcon 
                        color='secondary'
                        sx={{
                            transform:'rotate(270deg)',
                            fontSize:'4em'
                        }}
                    />
                    <Box
                        sx={{
                            border:2,
                            borderRadius:5,
                            borderColor:'secondary.main',
                            mt:3,
                            p:1
                        }}
                    >
                        <Typography
                            variant='h4'
                        >
                            Try adding some filters to your search!
                        </Typography>
                    </Box>

                </Box>

                <Box
                    sx={{width:'48%'}}
                >

                    {/* <Typography>Hello</Typography> */}

                </Box>
            </Box>
        </Fade> 
    )
}


export default ExplainerSection
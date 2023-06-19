import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function LineItemSample ({name,column1,column2,boolean,mode,temporaryColors}) {

    return(
        <Box
            sx={{
                "&:hover": {'background':temporaryColors[mode].secondary.main}, 
                border:1,
                borderRadius:2,
                mt:1,
                p:1,
                borderColor: temporaryColors[mode].primary.main
            }}
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <Typography
                sx={{
                    minWidth:90
                }}
                color={temporaryColors[mode].text.primary}
                variant='h4'
            >
                {name}
            </Typography>
            <Box
                sx={{   
                    width:'100%'
                }}
                display='flex'
                alignItems='center'
                justifyContent='space-around'
            >
                <Typography
                sx={{minWidth:30}}
                    align='center'
                    color={temporaryColors[mode].text.primary}
                >
                    {column1}
                </Typography>
                <Typography
                    color={temporaryColors[mode].text.primary}
                >
                    {column2}
                </Typography>
                {boolean ? 
                    <CheckIcon style={{color:temporaryColors[mode].primary.main}}/> 
                    : 
                    <CloseIcon style={{color:temporaryColors[mode].primary.main}}/>
                }
                
            </Box>

        </Box>
    )
}

export default LineItemSample
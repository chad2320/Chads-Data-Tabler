import { Box} from "@mui/material"
import {CircularProgress} from "@mui/material";
import React from 'react';

const Loading = () => {

    return (
        <Box 
          sx={{
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
            flex:1,
          }} 
        >
             <CircularProgress color='primary'/>
        </Box>
    )
}

export default Loading
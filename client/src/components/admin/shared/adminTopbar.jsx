import React from "react";
import { Box,Link, Button } from "@mui/material";



const TopBar = () =>{

   
    
    return(
        <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            sx={{
                height:30,
                minWidth:'100%',
                pl:0.5,
                mb:0.5
            }}
        >
            <Link
                href='./'
                style={{ textDecoration: 'none' }}
            >
                <Button
                    variant='outlined'
                    size='small'
                >
                    Back To Home
                </Button>
            </Link>
            

        </Box>
    )
}

export default TopBar
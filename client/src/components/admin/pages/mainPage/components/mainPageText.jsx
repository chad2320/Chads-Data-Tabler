import React from "react";
import { Typography,Box, Button } from "@mui/material";

const MainPageText = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='space-between'
        >
            <Typography variant='h3' align='center'>
                Welcome To Chads Data Table Builder
            </Typography>
            <Typography variant='h6' align='center'>
                Please check the github for complete startup 
                information. Which is linked at the bottom of 
                this section.
            </Typography>
            <Box //Github button
                display='flex'
                justifyContent='center'
                sx={{
                    width:'100%'
                }}
            >
                <Button
                    variant="outlined"
                    href="https://github.com/chad2320/Chads-Data-Tabler"
                >
                    Github
                </Button>
            </Box>
        </Box>
    )
}

export default MainPageText
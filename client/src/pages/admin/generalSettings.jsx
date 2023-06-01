import React from "react";
import { Box, Typography } from "@mui/material";
import TopBar from "../../scenes/admin/adminTopbar";
import dotenv from 'dotenv';

dotenv.config();

const GeneralSettings = () => {
    return(
        <Box>
          <TopBar/>
          
          <Typography>
            Nothing to show here yet.
          </Typography> 

        </Box>
    )
}

export default GeneralSettings
import React from "react";
import { Box } from "@mui/material";
import TopBar from "../../scenes/admin/adminTopbar";
import dotenv from 'dotenv';

dotenv.config();

const GeneralSettings = (props) => {
    const envVars = Object.keys(process.env);
    return(
        <Box>
        <TopBar/>
        <div>
      <h2>Environment Variables</h2>
      <ul>
        {envVars.map((key) => (
          <li key={key}>
            {key}: {process.env[key]}
          </li>
        ))}
      </ul>
    </div>

        </Box>
    )
}

export default GeneralSettings
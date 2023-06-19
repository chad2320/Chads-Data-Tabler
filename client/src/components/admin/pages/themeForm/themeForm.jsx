import React from "react";
import { Box } from "@mui/material";
import ColorModeContainer from "./components/colorModeContainer";
import TopBar from "../../shared/adminTopbar";

function ThemeForm() {

  return (
    <Box>
      <TopBar/>
      <Box display='flex' flexDirection='row'>
        <ColorModeContainer mode='dark' />
        <ColorModeContainer mode='light' />
      </Box>
    </Box>
  );
}

export default ThemeForm
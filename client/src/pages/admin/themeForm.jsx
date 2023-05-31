import React from "react";
import { Box } from "@mui/material";
import ColorModeContainer from "../../components/admin/themeSetupPage/colorModeContainer";
import TopBar from "../../scenes/admin/adminTopbar";

function ThemeForm({ colorOptions,setColorOptions }) {

  function handleSetColorOptions(path, data) {//Update Local State & Rerender Children
    setColorOptions(prevColors => {
      const temp = {...prevColors}; // create a new copy of the state
      temp[path[0]][path[1]][path[2]] = data;
      return temp;
    });
  }

  return (
    <Box>
    <TopBar/>
    <Box
      display='flex'
      flexDirection='row'
    >
      <ColorModeContainer
        mode='dark'
        colorOptions={colorOptions}
        handleSetColorOptions={handleSetColorOptions}
      />
      <ColorModeContainer
        mode='light'
        colorOptions={colorOptions}
        handleSetColorOptions={handleSetColorOptions}
      />
    </Box>
    </Box>
  );
}

  export default ThemeForm
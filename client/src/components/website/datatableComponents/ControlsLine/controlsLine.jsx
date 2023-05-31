import { Box} from "@mui/material"
import ListLength from "./listLength";
import Pages from "./pages";
import React from 'react';

const ControlsLine = (props) => {
    return (
        <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems='center'
        >
            <ListLength />
            <Pages />
        </Box>
    )}


export default ControlsLine
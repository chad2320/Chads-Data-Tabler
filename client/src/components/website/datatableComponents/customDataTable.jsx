import { Box,Fade} from "@mui/material"
import ControlsLine from "./ControlsLine/controlsLine";
import ColumnsLine from "./ColumnsLine/columnsLine";
import ListDisplay from "./ListDisplay/listDisplay";
import React from 'react';
import {useSearch} from "../../../utils/filterSearch";

const CustomDataTable = () => {
    const {tableData} = useSearch()
        
    if(tableData){
        return (
            <Fade 
                in 
                timeout={250}
            >
                <Box 
                    sx={{pl:1,pr:1}}
                >
                    <ControlsLine />
                    <ColumnsLine />
                    <ListDisplay />
                    
                </Box>
            </Fade> 
        )} else {
            return (
            <Box>
            </Box>
        )}
    }


export default CustomDataTable



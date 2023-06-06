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
                    sx={{mt:1,pl:0.5,pr:0.5}}
                >
                    {(tableData.length != 0) ? <ControlsLine /> : null}
                    <ColumnsLine />
                    <ListDisplay />
                </Box>
            </Fade> 
        )}
    }


export default CustomDataTable



import { Box,Fade} from "@mui/material"
import ControlsLine from "./ControlsLine/controlsLine";
import ColumnsLine from "./ColumnsLine/columnsLine";
import ListDisplay from "./ListDisplay/listDisplay";
import React from 'react';
import {useSearch} from "../../../utils/filterSearch";
import ExplainerSection from "./explainerSection";

const CustomDataTable = () => {
    const {tableData} = useSearch()
    if(tableData.length !== 0){
        return (
            <Fade in timeout={250}>
                <Box 
                    sx={{mt:1,pl:0.5,pr:0.5}}
                >
                    <ControlsLine /> 
                    <ColumnsLine />
                    <ListDisplay />
                </Box>
            </Fade> 
        )}else {
            return(<ExplainerSection/>)
        }
    } 


export default CustomDataTable



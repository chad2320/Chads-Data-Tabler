import { Box,Fade} from "@mui/material"
import ControlsLine from "./ControlsLine/controlsLine";
import ColumnsLine from "./ColumnsLine/columnsLine";
import ListDisplay from "./ListDisplay/listDisplay";
import React from 'react';
import {useSearch} from "../../../utils/filterSearch";
import ExplainerSection from "./explainerSection";
import { useGuideInformation } from "../../../utils/userGuides";

const CustomDataTable = () => {
    const {tableData} = useSearch()
    const {guide} = useGuideInformation()
    console.log('customDataTable',guide)
    return (
        <Box>
            {(tableData.length > 0) ?
            <Fade in timeout={300}>
                <Box 
                    sx={{mt:1,pl:0.5,pr:0.5}}
                    >
                    <ControlsLine /> 
                    <ColumnsLine />
                    <ListDisplay />
                </Box>
            </Fade> 
            : guide ? 
            <ExplainerSection/> 
            : 
            null
            }
        </Box>
    )
} 


export default CustomDataTable



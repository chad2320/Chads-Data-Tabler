import { Box,Fade} from "@mui/material"
import ControlsLine from "./sections/ControlsLine/controlsLine";
import ColumnsLine from "./sections/ColumnsLine/columnsLine";
import ListDisplay from "./sections/ListDisplay/listDisplay";
import React from 'react';
import ExplainerSection from "../../shared/useGuide";
import { useSelector } from "react-redux";

const CustomDataTable = () => {
    const {tableData,visibleFilters} = useSelector((store) => store.filterSearch)
    const {enabled} = useSelector((store) => store.userGuide)

    return (
        <Box>
            {(tableData.length > 0) ?
            <Fade in timeout={300}>
                <Box sx={{mt:1,pl:0.5,pr:0.5}}>
                    <ControlsLine /> 
                    <ColumnsLine />
                    <ListDisplay />
                </Box>
            </Fade> 
            : 
            (enabled && !visibleFilters) ?
                <ExplainerSection
                    text='Try adding some filters to your search!'
                    arrow={true}
                    guideButton={true}
                /> 
            :
            (enabled && visibleFilters) ?
                <ExplainerSection
                    text='Edit your filters parameters then hit search!'
                    arrow={false}
                    guideButton={false}
                />
            :
            null
            }
        </Box>
    )
} 


export default CustomDataTable



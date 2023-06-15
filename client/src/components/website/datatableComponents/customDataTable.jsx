import { Box,Fade} from "@mui/material"
import ControlsLine from "./ControlsLine/controlsLine";
import ColumnsLine from "./ColumnsLine/columnsLine";
import ListDisplay from "./ListDisplay/listDisplay";
import React from 'react';
import ExplainerSection from "../userGuides/explainerSection";
import { useGuideInformation } from "../../../utils/useGuides";
import { useSelector } from "react-redux";

const CustomDataTable = () => {
    const {status} = useSelector((store) => store.filterSearch)
    const {guide} = useGuideInformation()

    return (
        <Box>
            {(status !== 'idle') ?
            <Fade in timeout={300}>
                <Box sx={{mt:1,pl:0.5,pr:0.5}}>
                    <ControlsLine /> 
                    <ColumnsLine />
                    <ListDisplay />
                </Box>
            </Fade> 
            : 
            (guide.enabled && guide.current === 'addFilter') ?
                <ExplainerSection
                    text='Try adding some filters to your search!'
                    arrow={true}
                    guideButton={true}
                /> 
            :
            (guide.enabled && guide.current === 'useFilter') ?
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



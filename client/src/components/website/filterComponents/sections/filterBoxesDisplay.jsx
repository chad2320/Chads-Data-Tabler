import { Box, Divider, Typography,Grid} from "@mui/material"
import ComponentTyper from "../consolidators/componentTyper";
import React, {useState,useEffect} from 'react';
import {windowSizer} from '../../../../utils/windowSize'
import { useSelector } from "react-redux";

//When users make a selection in filterSelect the corresponding filter is
//added. This component displays the added filters and allows users to adjust
//the filters.

const FilterBoxesDisplay = () => {
    const {filtersData,filtersList} = useSelector((store) => store.filters)
    //Handle window sizing. 17-22
    let {windowSize} = windowSizer()
    let {width} = windowSize
    const [wideWindow,setWideWindow] = useState(true)

    useEffect(()=>{
        if(width < 830){setWideWindow(false)}else{setWideWindow(true)}
    },[width])

    //Check to see what filters we have. Dictates how we layout the filters.25-37
    const [haveBoolean,setHaveBoolean] = useState(false)
    const [haveRange,setHaveRange] = useState(false)
    const [haveDropdown,setHaveDropdown] = useState(false)
    console.log(haveBoolean,haveDropdown,haveRange)
    
    function toggleCheck(x){
        if(filtersData.controlsObject){
            function checkNestedObject(obj, targetType) {
                if (typeof obj === 'object' && obj !== null) {
                  for (const key in obj) {
                    if (typeof obj[key] === 'object') {
                      if (checkNestedObject(obj[key], targetType)) {
                        return true;
                      }
                    } else if (obj[key] === true && obj['type'] === targetType) {
                      return true;
                    }
                  }
                }
                return false;
              }
              return checkNestedObject(filtersData.controlsObject,x)
        }
    }
    
    useEffect(()=>{
        if(filtersList.length > 0){
            if(toggleCheck('boolean')){setHaveBoolean(true)}else{setHaveBoolean(false)}
            if(toggleCheck('range')){setHaveRange(true)}else{setHaveRange(false)}
            if(toggleCheck('dropdown')){setHaveDropdown(true)}else{setHaveDropdown(false)}
        }
    },[filtersList])



    return (
    <Box 
        sx={{width:'100%'}} 
        display='flex' 
        justifyContent='space-between'
        flexDirection={wideWindow ? 'row' : 'column'}//Adjusts layout
    >
        <Box
            display='flex'
            flexDirection='column'
        >
            {haveRange ? //Render the range section
                <Box   
                    display='flex' 
                    flexDirection='column'
                >
                    <Typography>
                        Range Filters
                    </Typography>
                    <Grid container>
                        <ComponentTyper 
                            type='range' 
                            data={filtersData} 
                        />
                    </Grid>
                </Box>
            :null}

            {haveDropdown ? //Render the dropdown section
                <Box 
                    sx={{

                    }} 
                    display='flex' 
                    flexDirection='column'
                >
                    <Typography>
                        Dropdown Filters
                    </Typography>

                    <Grid container>
                        <ComponentTyper 
                            type='dropdown' 
                            data={filtersData} 
                        />
                    </Grid>
                </Box>
            :null}
        </Box>

        {haveBoolean ? // Render the boolean section
        <Box
            sx={(
                wideWindow && (haveDropdown || haveRange)) 
                ? {width:'35%'}: {width:'100%'}}
            display='flex'
            flexDirection={wideWindow ? 'row' : 'column'}
        >
            { haveDropdown || haveRange ? //Render a section divider
                <Divider 
                    flexItem 
                    sx={{m:1}} 
                    color='primary.main' 
                    orientation={wideWindow ? 'vertical' : 'horizontal'}
                />
            : null}

            <Box
                sx={{width:'95%'}}
                display='flex' 
                flexDirection='column'
            >
                <Typography>
                    Boolean Filters
                </Typography>
                <ComponentTyper 
                    type='boolean' 
                    data={filtersData} 
                />
            </Box>
            
        </Box>
        :null}
        
    </Box>
    )
}


export default FilterBoxesDisplay
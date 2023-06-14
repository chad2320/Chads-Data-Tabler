import { Box, Divider, Typography,Grid} from "@mui/material"
import React, {useState,useEffect} from 'react';
import {windowSizer} from '../../../../utils/windowSize'
import { useSelector } from "react-redux";
import DefaultDropdown from "../filters/dropdown";
import RangeSlider from "../filters/rangeSlider";
import BooleanCheckmark from '../filters/boolean'

//When users make a selection in filterSelect the corresponding filter is
//added. This component displays the added filters and allows users to adjust
//the filters.

const FilterBoxesDisplay = () => {
    const {autoCompleteValue} = useSelector((store) => store.filters)
    //Handle window sizing.
    let {windowSize} = windowSizer()
    let {width} = windowSize
    const [wideWindow,setWideWindow] = useState(true)

    useEffect(()=>{
        if(width < 830){setWideWindow(false)}else{setWideWindow(true)}
    },[width])

    //Check to see what filters we have. Dictates how we layout the filters.
    const [haveBoolean,setHaveBoolean] = useState(false)
    const [haveRange,setHaveRange] = useState(false)
    const [haveDropdown,setHaveDropdown] = useState(false)
    
    useEffect(()=>{ // Check what type of filters we have
        let tempRange = autoCompleteValue.filter(obj => obj.type === 'range')
        if(tempRange.length >0){setHaveRange(true)}else{setHaveRange(false)}
        let tempDropdown = autoCompleteValue.filter(obj => obj.type === 'dropdown')
        if(tempDropdown.length >0){setHaveDropdown(true)}else{setHaveDropdown(false)}
        let tempBoolean = autoCompleteValue.filter(obj => obj.type === 'boolean')
        if(tempBoolean.length >0){setHaveBoolean(true)}else{setHaveBoolean(false)}
    },[autoCompleteValue])
    
    return (
    <Box 
        sx={{width:'100%'}} 
        display='flex' 
        justifyContent='space-between'
        flexDirection={wideWindow ? 'row' : 'column'}//Adjusts layout
    >
        <Box display='flex' flexDirection='column'>

            {haveRange ? //Render the range section
                <Box display='flex' flexDirection='column'>

                    <Typography> Range Filters </Typography>

                    <Grid container>
                        {autoCompleteValue.filter( obj => obj.type === 'range').map(element =>
                            <Grid item key={element.title}>
                                <RangeSlider
                                    path={element.path}
                                    key={element.title}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            :
                null
            }

            {haveDropdown ? //Render the dropdown section
                <Box display='flex' flexDirection='column'>

                    <Typography> Dropdown Filters </Typography>

                    <Grid container>
                    {autoCompleteValue.filter( obj => obj.type === 'dropdown').map(element =>
                        <Grid item key={element.title}>
                            <DefaultDropdown
                                path={element.path}
                                key={element.title}
                            />
                        </Grid>
                    )}
                    </Grid>
                </Box> 
            :
                null
            }

        </Box>

        {haveBoolean ? // Render the boolean section
        <Box
            sx={(wideWindow && (haveDropdown || haveRange)) ? 
                {width:'35%'}: {width:'100%'}
            }
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
                : 
                null
            }

            <Box sx={{width:'95%'}} display='flex' flexDirection='column'>

                <Typography> Boolean Filters </Typography>

                <Grid container>
                    {autoCompleteValue.filter( obj => obj.type === 'boolean').map(element =>
                        <Grid item key={element.title}>
                            <BooleanCheckmark
                                path={element.path}
                                key={element.title}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box> 
            
        </Box>
        :
            null
        }
        
    </Box>
    )
}


export default FilterBoxesDisplay
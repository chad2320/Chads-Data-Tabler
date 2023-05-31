import { Box, Divider, Typography,Grid} from "@mui/material"
import ComponentTyper from "../consolidators/componentTyper";
import React, {useState,useEffect} from 'react';
import {windowSizer} from '../../../../utils/windowSize'
import useSelectFilters from "../../../../utils/filterSearch/useSelectFilters";
import { useSearch } from "../../../../utils/filterSearch";

//When users make a selection in filterSelect the corresponding filter is
//added. This component displays the added filters and allows users to adjust
//the filters.

const FilterBoxesDisplay = () => {
    const {filtersList} = useSelectFilters()
    const {data,setData} = useSearch()
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
    
    function toggleCheck(x){
        let temp = filtersList.filter(visibleTrue)
        function visibleTrue (el){
            return el.visible === true && el.type === x
        }
        return temp
        
    }
    
    useEffect(()=>{
        if(filtersList){
            if(toggleCheck('boolean').length > 0){setHaveBoolean(true)}else{setHaveBoolean(false)}
            if(toggleCheck('range').length > 0){setHaveRange(true)}else{setHaveRange(false)}
            if(toggleCheck('dropdown').length > 0){setHaveDropdown(true)}else{setHaveDropdown(false)}
        }
    },[data])



    return (
    <Box 
        sx={{
            width:'100%'
        }} 
        display='flex' 
        justifyContent='space-between'
        flexDirection={wideWindow ? 'row' : 'column'}//Adjusts layout
    >
        <Box
            sx={{
                
            }}
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
                            data={data} 
                            setData={setData}
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
                            data={data} 
                            setData={setData}
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
                    data={data} 
                    setData={setData}
                />
            </Box>
            
        </Box>
        :null}
        
    </Box>
    )
}


export default FilterBoxesDisplay
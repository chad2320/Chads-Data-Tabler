import {Box} from "@mui/material"
import FilterSelect from "./sections/filterSelect";
import FilterBoxesDisplay from "./sections/filterBoxesDisplay";
import SearchLine from "./sections/searchLine";
import React from 'react';

const FilterSearchBox = () => {
return (
        /* Box Component that houses everything and spaces it out. */
    <Box 
        sx={{
            pt:1,
            ml:0.5,
            mr:0.5, 
            pr:1,
            pl:1,
            border:1,
            borderColor:'primary.main',
            borderRadius:2
        }}
    >
        <FilterSelect />
        <FilterBoxesDisplay />
        <SearchLine />
    </Box>
    
    )
} 

export default FilterSearchBox
import {Box} from "@mui/material"
import FilterSelect from "./sections/filterSelect";
import FilterBoxesDisplay from "./sections/filterBoxesDisplay";
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
        }}
    >
        <FilterSelect />
        <FilterBoxesDisplay />
        {/* {(tableData.length !== 0) ?<SearchLine /> : null} */}
    </Box>
    
    )
} 

export default FilterSearchBox
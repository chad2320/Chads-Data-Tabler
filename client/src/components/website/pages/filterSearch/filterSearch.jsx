import React from 'react'
import { Box } from '@mui/system';
import FilterSearchBox from './scenes/filters/filterSearchBox';
import CustomDataTable from './scenes/dataTable/customDataTable';
import Loading from '../../../shared/loading';
import { useSelector } from 'react-redux';

const FilterSearch = () => {
  const {filtersData} = useSelector((store)=>store.filterSearch)
/* ------------------------Page Rendering--------------------------------- */

                      /* Waits for filters info from mongodb
                      then displays the controls. Which
                      is controlled here below.*/

                      /* Note: The CustomDataTable component
                      uses transitions to wait for data before
                      displaying anything. Which it controls
                      itself.*/

    if(filtersData.length === 0){return <Loading/>}
    return(
        <Box sx={{pb:3}}>
              {/* This renders everything in the filter box */}
            <FilterSearchBox />
              {/* This renders the data table */}
            <CustomDataTable />
        </Box>
    )
}

export default FilterSearch

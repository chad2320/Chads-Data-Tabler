import React from 'react'
import { Box } from '@mui/system';
import FilterSearchBox from '../../components/website/filterComponents/filterSearchBox';
import CustomDataTable from '../../components/website/datatableComponents/customDataTable';
import Loading from '../../components/general/loading';
import { useSelector } from 'react-redux';

const FilterSearch = () => {
  const {filtersData} = useSelector((store)=>store.filters)
/* ------------------------Page Rendering--------------------------------- */

                      /* Waits for filters info from mongodb
                      then displays the controls. Which
                      is controlled here below.*/

                      /* Note: The CustomDataTable component
                      uses transitions to wait for data before
                      displaying anything. Which it controls
                      itself.*/

    if(!filtersData){return <Loading/>}
    else{
      return(
          <Box sx={{pb:3}}>
                {/* This renders everything in the filter box */}
              <FilterSearchBox />
                {/* This renders the data table */}
              <CustomDataTable />
          </Box>
      )}
}

export default FilterSearch

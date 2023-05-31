import React from 'react'
import { Box } from '@mui/system';
import FilterSearchBox from '../../components/website/filterComponents/filterSearchBox';
import CustomDataTable from '../../components/website/datatableComponents/customDataTable';
import Loading from '../../components/general/loading';
import {useSearch} from '../../utils/filterSearch';

const FilterSearch = () => {
const theFilterSearch = useSearch()
/* ------------------------Page Rendering--------------------------------- */

                      /* Waits for filters info from mongodb
                      then displays the controls. Which
                      is controlled here below.*/

                      /* Note: The CustomDataTable component
                      uses transitions to wait for data before
                      displaying anything. Which it controls
                      itself.*/

    if(!theFilterSearch.data){return <Loading/>}
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

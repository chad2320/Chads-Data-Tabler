import { Box, Typography} from "@mui/material"
import LineItem from "./lineItem";
import React from 'react';
import { useSearch } from "../../../../utils/filterSearch";
import useFetchFilters from "../../../../utils/filterSearch/useFetchFilters";

const ListDisplay = () => {
    const {tableData,controls,data} = useSearch()
    const {searchValue} = useFetchFilters()
    
    if(tableData !== undefined){
        return (
            tableData.map((x,index)=>
                <LineItem 
                    key={x._id} 
                    wait={((index + 1)*1250)+500} //sets transition delay
                    tableData={x}
                    data={data}
                    controls={controls}
                    searchValue={searchValue[0].key}
                />
            ))
    } else {
        return(
            <Box align='center'><Typography>Nothing Matched Your Search</Typography></Box>
        )
    }
    }


export default ListDisplay
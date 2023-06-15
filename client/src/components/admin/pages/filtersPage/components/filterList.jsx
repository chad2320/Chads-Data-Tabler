import React from "react";
import { Box } from "@mui/material";
import SingleFilter from "./singleFilter";

const FilterList = (props) =>{
    let {controlObject,editControlObject} = props.controlPackage
    console.log(controlObject)
    return(
        <Box 
            display='flex' 
            flexDirection='column' 
            justifyContent='center'
            alignItems='center'
        >
            {controlObject.data.map((item)=>
                <SingleFilter
                    key={`${item.title}${item.type}`}
                    item={item}
                    title={item.title}
                    checked={item.checked}
                    editControlObject={editControlObject}
                />
            )}
        </Box>
    )

    
}

export default FilterList
import React, { useState } from "react";
import {Box} from '@mui/material';
import TopBar from "../../scenes/admin/adminTopbar";
import ControlPanel from "../../scenes/admin/controlPanel";
import FilterList from "../../scenes/admin/filterList";

const FiltersPage = () =>{
    const [controlObject,setControlObject] = useState(null)

    //Used to change the control object.
    function editControlObject (title,key,data){
        const index = controlObject.data.findIndex(obj => obj.title === title);
        let temp = controlObject.data
        if (index !== -1) {
            const objToUpdate = temp[index];
            objToUpdate[key] = data;
            temp[index] = objToUpdate;
        }
        let temp2 = controlObject
        temp2.data = temp
        setControlObject(temp2)
    }

    let controlPackage = {controlObject,editControlObject}



    return(
        <Box 
            display='flex' 
            flexDirection='column'
        >

            <TopBar/>

            <ControlPanel
                controlObject={controlObject} 
                setControlObject={setControlObject}
            />

            <Box
                sx={{
                    m:0.5,
                }}
            >
                {controlObject && 
                    <FilterList controlPackage={controlPackage} />
                }
            </Box>
        </Box>
    )
}

export default FiltersPage
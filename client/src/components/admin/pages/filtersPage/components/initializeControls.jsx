import React from "react";
import { IconButton} from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import grabRawControlsData from "../../../../../CRUD Operations/initializeControls";


const InitializeControls = (props) =>{
    const{controlObject,setControlObject,setLoading} = props

    const handleChange = async () =>{
        console.log('Clicked Initialized Controls')
        setLoading(true)
        if(!controlObject){
            try {
                let data = await grabRawControlsData()
                setControlObject(data)
            } catch (error) {
                console.log(error)
            }
        } else {console.log('Doing this would reset unsaved information.')}
        setLoading(false)
    }


    return(
        
            <IconButton 
                sx={{
                    width:20
                }}
                color='primary'
                size='small' 
                variant='contained'
                disabled={controlObject === null ? false : true}
                onClick={handleChange}
            >
                <PlayCircleFilledIcon/>
            </IconButton>
        
    )
}

export default InitializeControls
import React,{useState,useEffect} from "react";
import { Button,Fade} from "@mui/material";
import submitControls from "../../../../../CRUD Operations/submitControl" ;
import grabRawControlsData from "../../../../../CRUD Operations/initializeControls" ;

const SubmitControls = ({controlObject,setControlObject}) =>{
    const [saveStatus,setSaveStatus] = useState('default')
    

    const handleChange = async () =>{
        let response = await submitControls(controlObject)//returns true or false
        if(response){
            setSaveStatus('success')
            if(controlObject.status === 'Create'){
                //Grab the new object so we reset status to edit.
                let dbControls = await grabRawControlsData()
                setControlObject(dbControls)
            }
        } else {
            setSaveStatus('fail')
        }
    }

    useEffect(() => {
        let timeoutId;
    
        if (saveStatus !== 'default') {
          timeoutId = setTimeout(() => {
            setSaveStatus('default');
          }, 3000);
        }
    
        return () => clearTimeout(timeoutId);
    }, [saveStatus]);


    return(
        <Fade in timeout={2000}>
            <Button 
                size='small' 
                variant='contained'
                color={saveStatus !== 'default' ?
                        saveStatus === 'success' ?
                        'success'
                        :
                        'error'
                        :
                        'primary'
                    }
                onClick={saveStatus === 'default' ? handleChange : null}
            >
                {saveStatus !== 'default' ?
                    saveStatus === 'success' ?
                    'saved'
                    :
                    'error'
                    :
                    'submit'
                }
            </Button>

        </Fade>
        )
}

export default SubmitControls
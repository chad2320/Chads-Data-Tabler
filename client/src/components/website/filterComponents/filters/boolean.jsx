import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import React from 'react';

const BooleanCheckmark = (props) => {
    let {title,data,dbName,modifyData} = props

    const handleChange = (event) => {
        let result;
        if(event.target.value === 'true'){result = true}
        if(event.target.value === 'false'){result = false}
        modifyData(dbName,'data',result);
    }
    

    return (
        <Box 
            sx={{
                width:'100%',
                maxWidth:300,
                winWidth:200,
                mb:0.25,
                pl:1,
                pr:1,
                pb:0.5,
                maxHeight:"30px",
                border:1,
                borderColor:"secondary.main",
                borderRadius:"5px"
            }} 
            display='flex' 
            justifyContent='space-between' 
            alignItems='center'
        >
            <Typography 
                variant="h6" 
                color='text.main'
            >
                {title}
            </Typography>
            <Box>
                <NativeSelect
                    defaultValue={data}
                    onChange={handleChange}
                    inputProps={{name: title, id: 'uncontrolled-native',}}
                >  
                    <option value={null}>No Preference</option>
                    <option value={true}>Required</option>
                    <option value={false}>Not Required</option>
                </NativeSelect>
            </Box>
        </Box>
    )
}

export default BooleanCheckmark
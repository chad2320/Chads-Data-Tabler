import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { modifySingleFilter } from '../../../../features/filters/filtersSlice';


const BooleanCheckmark = ({path}) => {
    const dispatch = useDispatch()
    //Import the relevent data under the alias data through destructuring
    const { filtersData:{controlsObject:{ [path]: data }}} = useSelector((store) => store.filters)

    const handleChange = (event) => {
        let result;
        if(event.target.value === 'true'){result = true}
        if(event.target.value === 'false'){result = false}
        dispatch(modifySingleFilter({
            id: path,
            key:'data',
            value:result,
        }));
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
                {data.title}
            </Typography>
            <Box>
                <NativeSelect
                    defaultValue={data.data}
                    onChange={handleChange}
                    inputProps={{name: data.title, id: 'uncontrolled-native',}}
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
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Typography } from '@mui/material';
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { modifySingleFilter } from '../../../../../../../features/search/filterSearch/filterSearchSlice';

const DefaultDropdown = ({path}) => {
    const dispatch = useDispatch()

    //Import the relevent data under the alias data through destructuring
    const { filtersData:{controlsObject:{ [path]: data }}} = useSelector((store) => store.filterSearch)

    const handleChange = (event) => { //If user selects Any set to null
      let result = event.target.value
      if(event.target.value === 'Any'){result = null}
      dispatch(modifySingleFilter({
        id:data.path,
        key:'data',
        value:result,
      }));      
    }

    return (
        <Box 
          sx={{
            width: 150,
            border:1,
            p:1,
            m:0.5,
            borderRadius:"5px",
            borderColor:"primary.main" }}
        >
          <FormControl fullWidth>
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems='center'
            >
              <Typography 
                variant="h6" 
                color='text'
              >
                {data.title}
              </Typography>
              
            </Box>
            <NativeSelect
              defaultValue={data.data ? data.data : 'Any'}
              onChange={handleChange}
              inputProps={{ name: data.title, id: 'uncontrolled-native' }}
            >
              {[...new Set(data.options)].sort().map((item) => (
                <option
                  key={item === null ? 'Any' : item}
                  value={item}
                >
                  {item === null ? 'Any' : item}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
      )
}

export default DefaultDropdown
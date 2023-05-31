import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Typography } from '@mui/material';
import React from 'react';
const DefaultDropdown = (props) => {
    const {data,title,options,dbName,modifyData} = props

    function removeDuplicates(array) {
      const seen = [];
      let result = [];
    
      for (let item of array) {
        if (item !== null && seen.includes(item)) {
          continue;
        }
        seen.push(item);
        result.push(item);
      }
      result = array.filter(item => item !== null);//Remove all nulls
      result.sort()
      result.unshift(null);//Add one null
      return result;
    }
  
    let cleanOptions = removeDuplicates(options)

    const handleChange = (event) => {
      let result = event.target.value
      if(event.target.value === 'Any'){result = null}
      modifyData(dbName,'data',result);      
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
                {title}
              </Typography>
              
            </Box>
            <NativeSelect
              defaultValue={data ? data : 'Any'}
              onChange={handleChange}
              inputProps={{name: 'age', id: 'uncontrolled-native',}}
            >  
              {cleanOptions.map(item=>{
                return (
                  <option 
                    key={item === null ? 'Any': item} 
                    value={item}
                  >
                      {item === null ? 'Any': item}
                  </option>
                )})}
            </NativeSelect>
          </FormControl>
        </Box>
      )
}

export default DefaultDropdown
import React from 'react'
import { FormControl,Select,InputLabel,MenuItem } from '@mui/material'


const DropdownEditor = (props) => {
    
    let {setData,data2,disabled,options} = props.dropdownPackage

    function handleDefaultDropdownOption(event) {
        let final = event.target.value
        if(final === 'No Preference'){final = null}
        setData(final);
    }
    

    function replaceNullsWithNoPreference(arr) {
        const updatedArr = arr.map((el) => {
          if (el === null) {
            return "No Preference";
          }
          return el;
        });
        return updatedArr;
      }
    return(
        <FormControl variant='standard' size="small">
            <InputLabel>Default</InputLabel>
            <Select
                style={{minWidth:180}}
                size='small'
                value={data2 === null ? 'No Preference' : data2}
                disabled={disabled}
                onChange={handleDefaultDropdownOption}
                labelId="test-select-label"
                label="Select Default"
                >
                {replaceNullsWithNoPreference(options).map((item,index)=>{
                        return <MenuItem key={index} value={item}>{item}</MenuItem>
                }
                )}
            </Select>
        </FormControl>
    )
}

export default DropdownEditor
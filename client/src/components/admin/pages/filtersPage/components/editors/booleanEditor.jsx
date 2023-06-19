import React from 'react'
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material'

const BooleanEditor = (props) => {

    let {setData,data2,disabled} = props.booleanPackage
    
    function handleBoolean(event) {
        let final = event.target.value
        final === 'null' ? final = null : 
        setData(final);
    }

    return (
        <FormControl variant='standard' size="small">
            <InputLabel>Boolean</InputLabel>
            <Select
                style={{minWidth:180}}
                size='small'
                disabled={disabled}
                value={data2 === null ? 'null' : data2}
                onChange={handleBoolean}
                label="Step"
            >
                <MenuItem value={true}>Required</MenuItem>
                <MenuItem value={false}>Exclude</MenuItem>
                <MenuItem value={'null'}>No Preference</MenuItem>
            </Select>
        </FormControl>
    )
}

export default BooleanEditor
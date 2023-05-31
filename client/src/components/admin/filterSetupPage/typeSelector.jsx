import React from "react";
import { FormControl,InputLabel,Select,MenuItem } from "@mui/material";

const TypeSelector = (props) => {

    let {type2,setType} = props.typeSelectorPackage
    
    function handleType(event) {
        setType(event.target.value);
    }

    return(
        <FormControl
            sx={{
                ml:1,
                mr:2,
                minWidth:'15%'
            }}
            variant='standard' 
            size="small"
        >
            <InputLabel>Type</InputLabel>
            <Select
                style={{minWidth:120}}
                size='small'
                value={type2}
                onChange={handleType}
                label="Type"
            >
                <MenuItem 
                value='check'
                disabled={type2 === 'check' ? true:false}
                >
                    Check
                </MenuItem>

                <MenuItem 
                value='range'
                disabled={(type2 === 'range' || type2 === 'boolean' || type2 === 'dropdown')? true:false}
                >
                    Range
                </MenuItem>

                <MenuItem 
                value='boolean'
                disabled={(type2 === 'range' || type2 === 'boolean' || type2 === 'dropdown')? true:false}
                >
                    Boolean
                </MenuItem>
                <MenuItem 
                value='dropdown'
                disabled={(type2 === 'range' || type2 === 'boolean' || type2 === 'dropdown')? true:false}
                >
                    Dropdown
                </MenuItem>
                <MenuItem 
                value='search'
                disabled={type2 === 'search'?true:false}
                >
                    Search
                </MenuItem>
                <MenuItem 
                value='image'
                disabled={type2 === 'image'?true:false}
                >
                    Image
                </MenuItem>
                <MenuItem 
                value='value'
                disabled={type2 === 'value'?true:false}
                >
                    Value
                </MenuItem>
                <MenuItem 
                value='omit'
                disabled={type2 === 'omit'?true:false}
                >
                    Omit
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default TypeSelector
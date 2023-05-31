import React from "react";
import BooleanEditor from "./booleanEditor";
import DropdownEditor from "./dropdownEditor";
import RangeEditor from "./rangeEditor";
import { Box,Typography } from "@mui/material";

const EditorCombiner = (props) => {

    let {type2,dropdownPackage,rangePackage,booleanPackage,
    options} = props.editorCombinerPackage

    
    return(
        <Box
            sx={{
                minWidth:180
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
                {/* Renders Dropdown Types Default. Using options. */}
            {(type2 === 'dropdown' && options !=null) && 
                <DropdownEditor dropdownPackage={dropdownPackage}/>
            }
                {/* Handling for errors with trying to map null */}
            {(type2 === 'dropdown' && options == null) && 
                <Typography>
                    This can't be a dropdown. It has no options.
                </Typography>
            }
            {type2 === 'range' && 
                <RangeEditor rangePackage={rangePackage}/>
            }
            {type2 === 'boolean' && 
                <BooleanEditor booleanPackage={booleanPackage}/>
            }
        </Box>
    )
}

export default EditorCombiner
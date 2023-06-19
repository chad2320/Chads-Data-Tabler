import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { editSingleColorOption } from "../../../../../features/theme/themeSlice";

function ColorInput ({title,colors,path}){
    const dispatch = useDispatch()

    function handleInputChange(event){
        dispatch(editSingleColorOption({path:path,value:event.target.value}))
    }

    return (
        <Box
        sx={{
            mb:1
        }}
            display='flex'
            flexDirection=''
        >
            <Typography 
                color={colors[path[0]].text.primary}
                variant='h5' 
                sx={{mr:1,width:130}}
            >
                {title}
            </Typography>
            <Box
                display='flex'
                flexDirection='row'
            >
                <input
                    type="color"
                    name="primary"
                    value={colors[path[0]][path[1]][path[2]]}
                    onChange={handleInputChange}
                />
                <Typography 
                    variant='h6' 
                    sx={{ml:2}}
                    color={colors[path[0]].text.primary}
                >
                    {colors[path[0]][path[1]][path[2]]}
                </Typography>
            </Box>
        </Box>
    )
}

export default ColorInput
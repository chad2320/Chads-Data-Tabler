/* 
Used in main page as all the buttons that lead to different pages.
*/

import React from "react";
import { Link,Box, Typography } from "@mui/material";


const PageSelector = (props) =>{

    return(
        <Box        
            sx={{
                border:1,
                borderRadius:2,
                minWidth:100,
                minHeight:100,
                width:'23%'
            }}
        >
            <Link
                href={props.link}
                style={{ textDecoration: 'none' }}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    style={{whiteSpace: 'normal'}}
                    sx={{
                        width:'100%',
                        height:'100%',
                    }}
                >
                    <Typography
                        align="center"
                    >
                        {props.text}
                    </Typography>
                </Box>
            </Link>

        </Box>
    )
}

export default PageSelector
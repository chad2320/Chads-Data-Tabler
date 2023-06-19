import { Box, Typography} from "@mui/material"
import Grid from "@mui/material/Grid";
import LineItemData from "./lineItemDataDisplay";
import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import { openModal } from "../../../../../../../../features/modal/modalSlice";
import { flattenObject } from "../../../../../../../../utils/helpers";

const LineItem = ({tableData,searchKey}) => {
    const dispatch = useDispatch()
    const { columns } = useSelector((store)=>store.filterSearch)

    return (
        <Box>
        <Box /* Box creating room for permanent columns */
            onClick={()=>{dispatch(openModal())}}
            sx={{
                "&:hover": {'backgroundColor': 'secondary.main'}, 
                minHeight:'10px', 
                minWidth:'10px',
                p:0.5, 
                mt:1,
                border:1.5,
                borderColor:"primary.main",
                borderRadius:1
            }}
            display='flex' 
            justifyContent='space-between' 
            alignItems='center'
            >
                {/* Rigid Name Below */}
            <Box
                sx={{minHeight:'30px',minWidth:'200px',maxWidth:'200px'}} 
                display='flex' 
                alignItems='center'
                >
                <Typography variant='h5' noWrap>
                    {tableData[searchKey]}
                </Typography>
            </Box>
                {/* Dynamic columns below */}
            <Grid
                container
                direction="row"
                justifyContent='space-around'
                alignItems="center"
                >
                {columns.map(item=>{
                    let temp = flattenObject(tableData)
                    
                    return(
                        <Grid 
                        item 
                        sx={{minWidth:'80px'}}
                        key={item.title} 
                        display='flex' 
                        justifyContent='center' 
                        >
                            <LineItemData 
                                key={item.title} 
                                data={temp[item.path]} 
                            />

                        </Grid>
                    )
                })}
            </Grid>
        </Box>
                </Box>
    )}


export default LineItem



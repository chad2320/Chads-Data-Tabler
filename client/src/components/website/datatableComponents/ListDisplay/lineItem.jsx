import { Box, Typography,Fade} from "@mui/material"
import Grid from "@mui/material/Grid";
import LineItemData from "./lineItemDataDisplay";
import React from 'react';
import BasicModal from "../../../general/basicModal";

const LineItem = (props) => {
    const {tableData,data,wait,searchValue} = props

    //Modal State & Handling
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    function flattenObject(obj, prefix = '') {
        let flattenedObj = {};
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            let newKey = prefix === '' ? key : prefix + '.' + key;
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
              Object.assign(flattenedObj, flattenObject(obj[key], newKey));
            } else {
              flattenedObj[newKey] = obj[key];
            }
          }
        }
        return flattenedObj;
      }

    return (
        <Fade 
            in 
            timeout={{appear:wait,enter:wait,exit:200}}
        >
        {/* Box creating room for permanent columns */}
        <Box>
        <BasicModal modalOpen={modalOpen} handleModalClose={handleModalClose}/>

        <Box 
            onClick={()=>{handleModalOpen()}}
            sx={{
                "&:hover": {'backgroundColor': 'secondary.main'}, 
                minHeight:'10px', 
                minWidth:'10px',
                p:0.5, 
                mt:1,
                border:1,
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
                    {
                        tableData[searchValue]
                    }
                </Typography>
            </Box>
                {/* Dynamic columns below */}
            <Grid
                container
                direction="row"
                justifyContent='space-around'
                alignItems="center"
                >
                {Object.keys(data).filter(item=>data[item].isColumn).map(item=>{
                    let temp = flattenObject(tableData)
                    return(
                        <Grid 
                        item 
                        sx={{minWidth:'80px'}}
                        key={item} 
                        display='flex' 
                        justifyContent='center' 
                        >
                            <LineItemData 
                                key={item} 
                                data={temp[item]} 
                                column={item}
                                />

                        </Grid>
                    )
                })}
            </Grid>
        </Box>
                </Box>
        </Fade>
    )}


export default LineItem



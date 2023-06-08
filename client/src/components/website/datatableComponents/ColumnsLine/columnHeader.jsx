import { Box, Typography } from "@mui/material";
import HeightIcon from '@mui/icons-material/Height';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import {windowSizer} from '../../../../utils/windowSize'
import { useSearch } from "../../../../utils/filterSearch";

const ColumnHeader = ({ item }) => {
    let {windowSize} = windowSizer()
    let itemWidth = windowSize.width < 420 ? '100px' : '200px'

    const {
        haveWeSearchedYet,
        controls,
        setControls,
        modifyData
    } = useSearch();
  
    const { title, path } = item;
    let { sort1, sort2 } = controls;

    function handleToggle() { 
        let temp = { ...controls };
        if(temp.sort1.path === item.path){//if we are deleting a column with a sort
            if(temp.sort2){ //if there is a second sort
                temp.sort1 = temp.sort2 //replace sort 1 with sort 2
                temp.sort2 = false
            } else {temp.sort1 = false}
            setControls(temp)
        } else if(temp.sort2.path === item.path){
            temp.sort2 = false;
            setControls(temp);
        }
        modifyData(item.path,'isColumn',false);
    }

    function handleChange() {
        if (haveWeSearchedYet) {
        let temp = { ...controls };
        if (sort1 === false) {
            temp.sort1 = { name: title, path: path, val: -1 };
        } else if (sort1.name === title && sort1.val === -1) {
            temp.sort1 = { name: title, path: path, val: 1 };
        } else if (sort1.name === title && sort1.val === 1) {
            if (sort2 === false) {
            temp.sort1 = false;
            } else {
            temp.sort1 = temp.sort2;
            temp.sort2 = false;
            }
        } else if (sort2 === false) {
            temp.sort2 = { name: title, path: path, val: -1 };
        } else if (sort2.name === title && sort2.val === -1) {
            temp.sort2 = { name: title, path: path, val: 1 };
        } else if (sort2.name === title && sort2.val === 1) {
            temp.sort2 = false;
        }
        setControls(temp);
        }
    }

    const isSort1 = sort1 && sort1.name === title;
    const isSort2 = sort2 && sort2.name === title;

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ 
                minWidth: itemWidth,
                maxWidth:itemWidth, 
                minHeight: 20,
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor:'secondary.main',
                    borderRadius:5,
                }}
            >
                <IconButton onClick={handleToggle} size="small">
                    <ClearIcon color="primary.main" />
                </IconButton>
                
                <Typography 
                    noWrap 
                    variant="h6"
                    color='white'
                    >
                    {title}
                </Typography>
                
                {isSort1 && sort1.val === -1 && (
                    <IconButton onClick={handleChange} size="small">
                    <SouthIcon color="primary.main" />
                    </IconButton>
                )}
                
                {isSort1 && sort1.val === 1 && (
                    <IconButton onClick={handleChange} size="small">
                    <NorthIcon color="primary.main" />
                    </IconButton>
                )}
                
                {(!isSort1 || sort1.val === 0) && !isSort2 && (
                    <IconButton onClick={handleChange} size="small">
                    <HeightIcon />
                    </IconButton>
                )}
                
                {isSort2 && sort2.val === -1 && (
                    <IconButton onClick={handleChange} size="small">
                    <SouthIcon color="primary.main" />
                    </IconButton>
                )}
                
                {isSort2 && sort2.val === 1 && (
                    <IconButton onClick={handleChange} size="small">
                    <NorthIcon color="primary.main" />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
    };

export default ColumnHeader;

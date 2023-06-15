import { Box, Typography} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {windowSizer} from '../../../../utils/windowSize'
import React from 'react';

const LineItemData = (props) => {
    const {data} = props
    const {windowSize} = windowSizer()
    let itemWidth = windowSize.width < 420 ? '100px' : '200px'
    
    function concatenateStringElements(arr) {
        let result = '';
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'string') {
            result += arr[i];
            if (i < arr.length - 1 && typeof arr[i + 1] === 'string') {
              result += ', ';
            }
          }
        }
        return result;
    }

     if(Array.isArray(data)){
        return(
            <Box sx={{minWidth:itemWidth,maxWidth:itemWidth}}>
                <Typography noWrap align='center' >
                    {concatenateStringElements(data)}
                </Typography>
            </Box>
        )
    } else if(typeof data === 'string'){
        return(
            <Box sx={{minWidth:itemWidth,maxWidth:itemWidth}}>
                <Typography align='center' >{data}</Typography>
            </Box>
        )
    }  else if(typeof data === 'number'){
        return(
            <Typography align='center' sx={{minWidth:itemWidth,maxWidth:itemWidth}}>{data}</Typography>
            
        )
    } else if(typeof data === 'boolean'){
        if(data){
            return(
                <CheckIcon color='secondary' sx={{minWidth:itemWidth,maxWidth:itemWidth}}></CheckIcon>
            )
        }else{
            return(
                <CloseIcon color='secondary' sx={{minWidth:itemWidth,maxWidth:itemWidth}}></CloseIcon>
            )
        }
    } else if(data === null){
        return(
            <Typography align='center' sx={{minWidth:itemWidth,maxWidth:itemWidth}}>{null}</Typography>
        )
    } else if(data === undefined){
        return(
            <Typography align='center' sx={{minWidth:itemWidth,maxWidth:itemWidth}}>{null}</Typography>
        )
    }
}

export default LineItemData
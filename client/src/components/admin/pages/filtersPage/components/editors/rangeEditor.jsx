import React from 'react'
import { Box,FormControl,InputLabel,Select,MenuItem,Slider } from '@mui/material'

const RangeEditor = (props) => {
    let {step2,setStep,disabled,setData,data2,limits,title} = props.rangePackage
    function handleStep(event) {
        setStep(event.target.value);
    }
    const handleDefaultRange = (event,newValue) => {
        setData(newValue);
      };
    return(
        <Box
            sx={{
                minWidth:180,
            }}
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
        >
            <FormControl variant='standard' size="small">
                <InputLabel>Step</InputLabel>
                <Select
                    style={{minWidth:60}}
                    size='small'
                    disabled={disabled}
                    value={step2}
                    onChange={handleStep}
                    label="Step"
                >
                    <MenuItem value={0.001}>0.001</MenuItem>
                    <MenuItem value={0.01}>0.01</MenuItem>
                    <MenuItem value={0.1}>0.1</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={1000}>1000</MenuItem>
                    <MenuItem value={10000}>10000</MenuItem>
                </Select>
            </FormControl>


            <Slider
                sx={{
                    maxWidth:80,
                    "& .MuiSlider-thumb": {
                        width: 13,
                        height:13,
                    }
                }}
                size='small'
                disabled={disabled}
                min= {limits[0]}
                max={limits[1]}
                step={step2}
                getAriaLabel={() => title}
                value={data2}
                onChange={handleDefaultRange}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default RangeEditor
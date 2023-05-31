import { Autocomplete, Box,TextField} from "@mui/material"
import Grid from "@mui/material/Grid";
import ColumnHeader from "./columnHeader";
import React from 'react';
import { useSearch } from "../../../../utils/filterSearch";

const ColumnsLine = () => {
    const {data,modifyData} = useSearch()

    function handleAddColumn(x){
        x.forEach(item=>{
            modifyData(item.path,'isColumn',true)
        })
    }

    let filtersList = Object.keys(data)
        .filter(item=>
            data[item].columnable === true && (
                data[item].type === 'range' ||
                data[item].type === 'dropdown' ||
                data[item].type === 'boolean'
            )  
            )
        .map((item)=>data[item])
    let columnHeaders = Object.keys(data)
        .filter(item=>data[item].isColumn)
        .map(item=> data[item])
    //console.log('In columnsLine headers is',columnHeaders)

        return(
/* Box creating room for permanent columns */
            <Box 
                sx={{
                    minHeight:'10px', 
                    minWidth:'10px',
                    p:0.5,
                    border:1,
                    borderColor:"primary.main",
                    borderRadius:1
                }}
                display='flex' 
                flexDirection='row'
                justifyContent='space-between' 
                alignItems='center'
            >
                <Box 
                    sx={{
                        minHeight:'30px',
                        minWidth:'200px',
                        maxWidth:'200px'
                    }} 
                    display='flex' 
                    justifyContent='space-between' 
                    alignItems='center'
                >
                    {/* Handles adding column headers */}
                    
                    <Autocomplete
                        sx={{
                            width:'100%'
                        }}
                        multiple
                        id="tags-standard"
                        freeSolo
                        filterSelectedOptions
                        options={filtersList
                            .sort((a, b) =>b.type.toString().localeCompare(a.type.toString()))
                        }
                        onChange={(e, newValue) => handleAddColumn(newValue)}
                        groupBy={(option)=> option.type}
                        getOptionLabel={option => option.title}
                        renderTags={() => {}}
                        value={columnHeaders}
                        renderInput={params => (
                        <TextField
                            {...params}
                            sx={{mt:0,mb:0}}
                            variant="standard"
                            placeholder="Add More Columns Here"
                            margin="normal"
                            fullWidth
                        />
                        )}
                    />
                   
                   
                </Box>
{/* Dynamic columns below */}
                <Grid
                    container
                    direction="row"
                    justifyContent='space-around'
                    alignItems="center"
                >
                    {Object.keys(data).filter(item=>data[item].isColumn).map(x=>{return(
                        <Grid 
                            key={x}
                            item 
                            display='flex' 
                            justifyContent='center' 
                            sx={{minWidth:'100px'}}
                        >
                            <ColumnHeader item={data[x]} />
                        </Grid>
                    )})}
                </Grid>
            </Box>
            
        )
    }




export default ColumnsLine
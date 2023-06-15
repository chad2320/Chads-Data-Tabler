import { Autocomplete, Box,TextField} from "@mui/material"
import Grid from "@mui/material/Grid";
import ColumnHeader from "./columnHeader";
import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import { modifySingleFilter , addColumns} from "../../../../features/filters/filtersSlice";

const ColumnsLine = () => {
    const dispatch = useDispatch()
    const { columns , filtersList} = useSelector((store)=>store.filters)

    return(
        <Box 
            sx={{
                minHeight:'10px', 
                minWidth:'10px',
                pl:1,
                pb:0.25,
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
                    sx={{width:'100%'}}
                    multiple
                    disableClearable
                    id="tags-standard"
                    freeSolo
                    filterSelectedOptions
                    options={filtersList
                        //.sort((a, b) =>b.type.toString().localeCompare(a.type.toString()))
                    }
                    onChange={(e, newValue) => {
                        dispatch(modifySingleFilter({
                            id:newValue[0].path,
                            key:'isColumn',
                            value:true,
                        }))
                        dispatch(addColumns(newValue))
                    }}
                    groupBy={(option)=> option.type}
                    getOptionLabel={option => option.title}
                    renderTags={() => {}}
                    value={columns}
                    renderInput={params => (
                    <TextField
                        {...params}
                        sx={{mt:0,mb:0}}
                        size='small'
                        variant="outlined"
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
                {columns.map(x=>{
                    return (
                        <Grid 
                            key={x.title}
                            item 
                            display='flex' 
                            justifyContent='center' 
                            sx={{minWidth:'100px'}}
                        >
                            <ColumnHeader item={x} />
                        </Grid>
                )})}
            </Grid>
        </Box>
        
    )
}




export default ColumnsLine
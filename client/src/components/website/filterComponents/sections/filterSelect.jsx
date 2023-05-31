import { Autocomplete,Chip,TextField, Box,Typography} from "@mui/material"
import React from 'react';
import useSelectFilters from "../../../../utils/filterSearch/useSelectFilters";

//https://codesandbox.io/s/autocomplete-with-chips-85rqq?file=/demo.js

const FilterSelect = () => {
    const {filtersList,addFilter,filtersAutocomplete,
    setFiltersAutocomplete} = useSelectFilters()

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    if(filtersList){
        return (
            <Box 
                sx={{
                    mb:1,
                    borderRadius:"5px",
                    width:'100%'
                }}
                backgroundColor='neutral.light'
            >
                <Box sx={{ width: '100%' }}>
                    {/* Box That Carries All Top Bar Stuff For The Filterbox */}
            <Box sx={{width:'100%'}} display='flex' flexDirection='row'>
                <Box>
                    <Typography noWrap variant='h3'>Filter Box</Typography>
                </Box>
                {/* Input TextField Here */}
                <Autocomplete
                    sx={{ml:1}}
                    fullWidth
                    multiple
                    id="Filters-Toggle-Autocomplete"
                    freeSolo
                    size='small'
                    filterSelectedOptions
                    options={filtersList
                        .sort((a, b) =>b.type.toString()
                        .localeCompare(a.type.toString()))
                    }
                    onChange={(e, newValue) => addFilter(newValue)}
                    groupBy={(option)=> capitalizeFirstLetter(option.type)}
                    getOptionLabel={option => option.title}
                    renderTags={() => {}}
                    value={filtersAutocomplete}
                    renderInput={params => (
                        <TextField
                            {...params}
                            sx={{mt:0}}
                            variant="standard"
                            placeholder="Add Your Filters Here"
                            margin="normal"
                            fullWidth
                        />
                    )}
                />
                
            </Box>
                        {/* List Chips Here */}
                    <Box>
                        {filtersAutocomplete.map((option) => {
                        // This is to handle new options added by the user (allowed by freeSolo prop).
                        const label = option.title || option;
                        return (
                        <Chip
                            color='primary'
                            variant='outlined'
                            style={{border:'1.5px solid'}}
                            sx={{m:0.2}}
                            key={label}
                            label={label}
                            onDelete={() => {
                                setFiltersAutocomplete(filtersAutocomplete.filter(entry => entry !== option));
                            }}
                        />
                        )})}</Box>
                </Box>
            </Box>
        )
    };
    
}

export default FilterSelect
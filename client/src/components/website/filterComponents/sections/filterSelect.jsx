import { Autocomplete,Chip,TextField, Box,Typography,CircularProgress,Button,Fade} from "@mui/material"
import React from 'react';
import useSelectFilters from "../../../../utils/filterSearch/useSelectFilters";
import { useSearch } from "../../../../utils/filterSearch";
//https://codesandbox.io/s/autocomplete-with-chips-85rqq?file=/demo.js

const FilterSelect = () => {
    const {filtersList,addFilter,filtersAutocomplete,
    setFiltersAutocomplete} = useSelectFilters()
    let {searchCountTotal,searchDatabase,loading} = useSearch()
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if(filtersList){
        return (
            <Box 
                sx={{
                    width:'100%'
                }}
            >
                <Box sx={{ width: '100%' }}>
                    {/* Box That Carries All Top Bar Stuff For The Filterbox */}
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >

                        {/* Input TextField Here */}
                        <Autocomplete
                            sx={{width:300}}
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
                                    sx={{mt:0,mb:0}}
                                    variant="outlined"
                                    placeholder="Add Filters Here To Refine Results"
                                    margin="normal"
                                />
                            )}
                        />
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                        >
                            {loading && <CircularProgress size={20}/>}
                            {!loading &&
                                <Fade in timeout={1000}>
                                    <Typography /* Shows total results found in search */
                                        variant='h5'
                                        noWrap
                                        sx={{
                                            ml:1,
                                            mr:1
                                        }}
                                    >
                                        {searchCountTotal === 0  ? null : 
                                            (searchCountTotal === -1 ? 
                                                'No Results' : 
                                                `${searchCountTotal} results`) }
                                    </Typography>    
                                </Fade>
                            }
                                

                            <Button /* Search button */
                                size='small' 
                                variant='contained'
                                color='secondary'
                                onClick={()=>searchDatabase(true)}
                                >
                                Search
                            </Button>
                        </Box>
                        
                    </Box>
                        {/* List Chips Here */}
                    <Box sx={{mt:0.5}}>
                        {filtersAutocomplete.map((option) => {
                            // This is to handle new options added by the user (allowed by freeSolo prop).
                            const label = option.title || option;
                            return (
                            <Chip
                                color='secondary'
                                variant='outlined'
                                style={{border:'1.5px solid'}}
                                sx={{m:0.2}}
                                key={label}
                                label={label}
                                onDelete={() => {
                                    setFiltersAutocomplete(filtersAutocomplete.filter(entry => entry !== option));
                                }}
                            />
                        )})}
                    </Box>
                </Box>
            </Box>
        )
    };
    
}

export default FilterSelect
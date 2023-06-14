import { Autocomplete,Chip,TextField, Box,Typography,CircularProgress,Button,Fade} from "@mui/material"
import React from 'react';
import useSelectFilters from "../../../../utils/filterSearch/useSelectFilters";
import { useSearch } from "../../../../utils/filterSearch";
import { useDispatch } from "react-redux";
import { modifySingleFilter, updateVisibility, addFilter2, removeFilter } from "../../../../features/filters/filtersSlice";
import { useSelector } from "react-redux";


const FilterSelect = () => {
    const dispatch = useDispatch()
    const {filtersList,autoCompleteValue} = useSelector((store)=>store.filters)
    const {addFilter,filtersAutocomplete,
    setFiltersAutocomplete} = useSelectFilters()
    let {searchCountTotal,searchDatabase,loading} = useSearch()
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    //console.log(filtersAutocomplete)


    if(filtersList.length > 0){
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
                            options={filtersList}
                            onChange={(event, newValue) => {
                                dispatch(modifySingleFilter({
                                    id:newValue[0].path,
                                    key:'visible',
                                    value:true,
                                }))
                                dispatch(updateVisibility())
                                dispatch(addFilter2(newValue))
                            }}
                            groupBy={(option)=> capitalizeFirstLetter(option.type)}
                            getOptionLabel={option => option.title}
                            renderTags={() => {}}
                            value={autoCompleteValue}
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
                        {autoCompleteValue.map((option) => {
                            // This is to handle new options added by the user (allowed by freeSolo prop).
                            const label = option.title;
                            return (
                            <Chip
                                color='secondary'
                                variant='outlined'
                                style={{border:'1.5px solid'}}
                                sx={{m:0.2}}
                                key={label}
                                label={label}
                                onDelete={() => {
                                    //setFiltersAutocomplete(filtersAutocomplete.filter(entry => entry !== option));
                                    dispatch(modifySingleFilter({
                                        id:option.path,
                                        key:'visible',
                                        value:false,
                                    }))
                                    dispatch(updateVisibility())
                                    dispatch(removeFilter(option.path))
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
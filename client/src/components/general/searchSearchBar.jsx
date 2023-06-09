import { Autocomplete, TextField,Box } from "@mui/material"
import React,{useState,useEffect} from 'react';
import {useFiltersContext} from '../../utils/filterSearch/useFetchFilters'
import BasicModal from "./basicModal";
import SearchIcon from '@mui/icons-material/Search';

const SearchSearchBar = () => {
    //Search State
    const [inputValue,setInputValue] = useState('')
    const [options,setOptions] = useState([])
    const {searchValue} = useFiltersContext()

    //Modal State & Handling
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    function extractStringsFromArray(array) {
      const extractedStrings = [];
    
      for (const object of array) {
        const keys = Object.keys(object);
        const value = object[keys[0]]; // Assumes each object has only one key-value pair
    
        if (typeof value === 'string') {
          extractedStrings.push(value);
        }
      }
    
      return extractedStrings;
    }

    useEffect(()=>{
      // Fetch data from your API based on the input value
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_Express_Connection}/search?inputValue=${inputValue}&key=${searchValue[0].key}`);
          const data = await response.json();
          let formattedData = extractStringsFromArray(data);
      
          // Remove duplicates from the formattedData array
          const uniqueOptions = [...new Set(formattedData)];
      
          setOptions(uniqueOptions);
        } catch (error) {
          console.error('Error fetching options:', error);
        }
      };
      

      if (inputValue !== '') {
        fetchData();
      } else {
        setOptions([]);
      }
    },[inputValue])

    return (
      <Box sx={{pl:0.5,pr:0.5}}>
        <Autocomplete
          sx={{ width:200,maxWidth: 300,minWidth:200 }}
          size='small'
          freeSolo
          disableClearable
          id="search bar"
          filterOptions={(x) => x}
          options={options}
          inputValue={inputValue}
          onInputChange={(event, newValue) => {
            setInputValue(newValue);
          }}
          onChange={handleModalOpen}
          noOptionsText="No Results"
          renderInput={(params) => (
            <Box display='flex' flexDirection='row' alignItems='center'> 
              <SearchIcon/>
              <TextField
                {...params}
                variant='outlined'
                label='Search By Title'
                size='small'
                InputProps={{
                  ...params.InputProps
                }}
              />
            </Box>
          )}
        />
        <BasicModal modalOpen={modalOpen} handleModalClose={handleModalClose}/>
      </Box>

    )
}

export default SearchSearchBar


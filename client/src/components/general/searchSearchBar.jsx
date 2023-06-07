import { Autocomplete, TextField, } from "@mui/material"
import React,{useState,useEffect} from 'react';
import useFetchFilters from '../../utils/filterSearch/useFetchFilters'

const SearchSearchBar = () => {
    const [inputValue,setInputValue] = useState('')
    const [options,setOptions] = useState([])
    const {searchValue} = useFetchFilters()
    console.log('options',options)

    function extractStringsFromArray(array) {
      const extractedStrings = [];
    
      for (const object of array) {
        const keys = Object.keys(object);
        const value = object[keys[0]]; // Assuming each object has only one key-value pair
    
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
          console.log('InputValue Shows',inputValue)
          const response = await fetch(`${process.env.REACT_APP_Express_Connection}/search?inputValue=${inputValue}&key=${searchValue[0].key}`);
          const data = await response.json();
          console.log('Request response',data)
          let formattedData = extractStringsFromArray(data);
          console.log(formattedData);
      
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
        <Autocomplete
        sx={{ width: 300 }}
        freeSolo
        id="search bar"
        disableClearable
        filterOptions={(x) => x}
        options={options}
        inputValue={inputValue}
        onInputChange={(event, newValue) => {
            setInputValue(newValue);
          }}
        noOptionsText="No Results"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />

    )
}

export default SearchSearchBar


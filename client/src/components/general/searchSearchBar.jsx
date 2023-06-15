import { Autocomplete, TextField, Box } from "@mui/material"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { clearStringSearch, getAutoCompleteItems, manageInputData } from "../../features/search/stringSearch/stringSearchSlice";

const SearchSearchBar = () => {
  const dispatch = useDispatch();
  const { inputData, searchData, status, error } = useSelector((store) => store.stringSearch);
  const { searchKey } = useSelector((store) => store.filterSearch);
  
  return (
    <Box sx={{ pl: 0.5, pr: 0.5 }}>
      <Autocomplete
        sx={{
          width: 200,
          maxWidth: 300,
          minWidth: 200,
          "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red", // Change the border color for error state
          },
        }}
        size='small'
        freeSolo
        disableClearable
        id="search bar"
        filterOptions={(x) => x}
        options={searchData}
        getOptionLabel={(option) => option[searchKey]}
        getOptionDisabled={(option) => !!option.disabled}
        inputValue={inputData}
        onInputChange={(event, newValue) => {
          dispatch(manageInputData(newValue));
          if (newValue !== '') {
            dispatch(getAutoCompleteItems());
          } else {
            dispatch(clearStringSearch());
          }
        }}
        onChange={() => { dispatch(openModal()); }}
        loading={(status === 'loading')}
        renderInput={(params) => (
          <Box display='flex' flexDirection='row' alignItems='center'>
            <SearchIcon />
            <TextField
              {...params}
              variant='outlined'
              label={error ? 'Error' : 'Search By Title'}
              size='small'
              error={!!error}
              InputProps={{
                ...params.InputProps
              }}
            />
          </Box>
        )}
      />
    </Box>
  );
}

export default SearchSearchBar;



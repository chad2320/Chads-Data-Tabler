import { Box, Typography,Button,Divider,CircularProgress,Fade} from "@mui/material"
import React from 'react';
import { useSearch } from "../../../../utils/filterSearch";


const SearchLine = () => {
    let {searchCountTotal,searchDatabase,loading} = useSearch()
    
    function handleClick(){
        searchDatabase(true)
    }

    return(
        <Box 
            sx={{mt:3,mb:1}}
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            flexDirection='column'
        >
            <Divider /* Line Seperating Search Line From Filters */
                sx={{height:1,width:'95%',mb:1,bgcolor:'primary.main'}}
            />

            <Box 
                sx={{pl:0.5,pr:0.5,width:'100%'}} 
                display='flex' 
                justifyContent='space-between' 
                alignItems='center'
            >
                {loading && <CircularProgress size={20}/>}
                {!loading &&
                    <Fade in timeout={1000}>
                        <Typography /* Shows total results found in search */
                            variant='h5'
                            >
                            {searchCountTotal === 0  ? null : 
                                (searchCountTotal === -1 ? 
                                    'No Results. Broaden Filters.' : 
                                    `${searchCountTotal} results`) }
                        </Typography>    
                    </Fade>
                }
                
                
                <Button /* Search button */
                    size='small' 
                    variant='contained'
                    color='secondary'
                    onClick={handleClick}
                    >
                    Search
                </Button>

            </Box>

        </Box>
    )

    }
export default SearchLine
import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import Topbar from './components/shared/topBar/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/shared/loading';
import { useSelector , useDispatch } from 'react-redux';
import BasicModal from './components/shared/basicModal';
import { getFilters } from './features/search/filterSearch/filterSearchSlice';
import { typographySettings } from './utils/typography';
import { intializeEnabled } from './features/userGuide/userGuideSlice'

function App() {
  let {isOpen} = useSelector((store)=>store.modal)
  let { palette , colorMode} = useSelector((store)=>store.theme)
  let { filterStatus } = useSelector((store)=>store.filterSearch)
  const dispatch = useDispatch()
  
  useEffect(()=>{ //Grab Information Before Rendering Page
    dispatch(intializeEnabled())
    dispatch(getFilters())
  },[])
  
  if(filterStatus === 'loading'){
    return (<Loading/>)
  }

  if(filterStatus === 'failed'){
    return (<Typography>Failed to connect to database.</Typography>)
  }

  if(filterStatus === 'succeeded'){
    return (
      <ThemeProvider theme={createTheme({
        typography:typographySettings,
        palette:palette[colorMode]
      })}>
      <CssBaseline />
      <BrowserRouter>
          {isOpen && <BasicModal/>}
          <Topbar />
          <AppRouterContainer/>
      </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App
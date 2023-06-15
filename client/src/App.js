import './App.css';
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Topbar from './scenes/website/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/general/loading';
import { useSelector , useDispatch } from 'react-redux';
import BasicModal from './components/general/basicModal';
import { getFilters } from './features/search/filterSearch/filterSearchSlice';
import { typographySettings } from './utils/typography';
import { intializeEnabled } from './features/userGuide/userGuideSlice'

function App() {
  let {isOpen} = useSelector((store)=>store.modal)
  let { palette , colorMode} = useSelector((store)=>store.theme)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(intializeEnabled())
    dispatch(getFilters())
  },[])
  
  if(!palette){
    return (<Loading/>)
  }

  return (
    <ThemeProvider theme={
      createTheme({
        typography:typographySettings,
        palette:palette[colorMode]
      })
      }
    >
    <CssBaseline />
    <BrowserRouter>
        {isOpen && <BasicModal/>}
        <Topbar />
        <AppRouterContainer/>
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App
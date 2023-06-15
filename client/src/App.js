import './App.css';
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Topbar from './scenes/website/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/general/loading';
import { GuideProvider } from './utils/useGuides';
import { useSelector , useDispatch } from 'react-redux';
import BasicModal from './components/general/basicModal';
import { getFilters } from './features/filters/filtersSlice';
import { typographySettings } from './utils/typography';

function App() {
  let {isOpen} = useSelector((store)=>store.modal)
  let { palette , colorMode} = useSelector((store)=>store.theme)
  const dispatch = useDispatch()
  
  useEffect(()=>{
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
    <GuideProvider>
    <CssBaseline />
    <BrowserRouter>
        {isOpen && <BasicModal/>}
        <Topbar />
        <AppRouterContainer/>
    </BrowserRouter>
    </GuideProvider>
    </ThemeProvider>

  );
}

export default App
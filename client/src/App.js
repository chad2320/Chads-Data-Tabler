import './App.css';
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/website/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/general/loading';
import theThemer from './utils/themer';
import { GuideProvider } from './utils/useGuides';
import { useSelector , useDispatch } from 'react-redux';
import BasicModal from './components/general/basicModal';
import { getFilters } from './features/filters/filtersSlice';

function App() {
  let {isOpen} = useSelector((store)=>store.modal)
  let themer = theThemer()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getFilters())
  },[])
  
  if(!themer.theme){
    return (<Loading/>)
  }

  return (
    <ThemeProvider theme={themer.theme}>
    <GuideProvider>
    <CssBaseline />
    <BrowserRouter>
        {isOpen && <BasicModal/>}
        <Topbar 
          colorMode={themer.colorMode} 
          setColorMode={themer.setColorMode} 
          />
        <AppRouterContainer 
          colorMode={themer.colorMode}
          colorOptions={themer.colorOptions}
          setColorOptions={themer.setColorOptions}
          />
    </BrowserRouter>
    </GuideProvider>
    </ThemeProvider>

  );
}

export default App
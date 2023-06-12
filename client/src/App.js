import './App.css';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/website/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/general/loading';
import theThemer from './utils/themer';
import { GuideProvider } from './utils/useGuides';
import { FiltersProvider } from './utils/filterSearch/useFetchFilters';
import { useSelector } from 'react-redux';
import BasicModal from './components/general/basicModal';

function App() {
  let {isOpen} = useSelector((store)=>store.modal)
  let themer = theThemer()

  if(!themer.theme){
    return (<Loading/>)
  }

  return (
    <ThemeProvider theme={themer.theme}>
    <FiltersProvider>
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
    </FiltersProvider>
    </ThemeProvider>

  );
}

export default App
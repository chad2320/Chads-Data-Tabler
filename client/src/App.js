import './App.css';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/website/websiteTopBar';
import AppRouterContainer from './AppRouterContainer'
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/general/loading';
import theThemer from './utils/themer';
import { GuideProvider } from './utils/userGuides';

function App() {
  let themer = theThemer()

  if(!themer.theme){
    return (<Loading/>)
  }

  return (
    <ThemeProvider theme={themer.theme}>
    <GuideProvider>
    <CssBaseline />
    <BrowserRouter>
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
import {useState,useEffect} from 'react'
import { createTheme } from '@mui/material';
import getFilters from '../CRUD Operations/getFilters';

const themer = () => {
    const [colorMode, setColorMode] = useState('dark');
    const [colorOptions, setColorOptions] = useState(null);
    const [theme, setTheme] = useState(null);
    
    const initializeTheme = () => {
        //Sets initial theme data using local storage or preset information.
        if(!theme){
            let tempTheme = localStorage.getItem('theme') //Check local storage theme
            let localTheme = JSON.parse(tempTheme)
            let tempColorOptions = localStorage.getItem('colorOptions')
            let localColorOptions = JSON.parse(tempColorOptions)
            let temp = {} //Initialize final theme object
            temp.typography = typographySettings
            if(!localTheme){ //If no local storage, use placeholder/preset data
                temp.palette = placeHolderTheme[colorMode]
                setColorOptions(placeHolderTheme)
            } else {
                temp.palette = localTheme.palette[colorMode]
                setColorOptions(localColorOptions)
            }
            setTheme(createTheme(temp))
        }
    }; initializeTheme()

    useEffect(() => {
        //Grab theme info from db to compare with local theme data.
        async function runThis (){
            let dbTheme = await getFilters()
            if(dbTheme){
                if(dbTheme.theme){
                const temp = {};
                setColorOptions(dbTheme.theme)
                temp.palette = dbTheme.theme[colorMode];
                temp.typography = typographySettings;
                setTheme(createTheme(temp))
                localStorage.setItem('theme',JSON.stringify(temp))
                localStorage.setItem('colorOptions',JSON.stringify(dbTheme.theme))
            }}
            else{console.log('No theme found.')}
        };runThis()
    },[])

    useEffect(() => {
        // Update theme when we toggle color modes.
        if (colorOptions) {
            const temp = {};
            temp.palette = colorOptions[colorMode];
            temp.typography = typographySettings;
            setTheme(createTheme(temp));
        }
    }, [colorMode]);

    return ({initializeTheme,theme,
        colorOptions,setColorOptions,colorMode,setColorMode})
}

const placeHolderTheme = {
    "dark": {
        "text": {
        "primary": "#00ff2b"
        },
        "primary": {
        "main": "#00ff2b"
        },
        "secondary": {
        "main": "#009a22"
        },
        "neutral": {
        "main": "#295822"
        },
        "background": {
        "default": "#000000"
        },
        "mode": "dark"
    },
    "light": {
        "text": {
        "primary": "#295822"
        },
        "primary": {
        "main": "#295822"
        },
        "secondary": {
        "main": "#87d936"
        },
        "neutral": {
        "main": "#808080"
        },
        "background": {
        "default": "#ffffff"
        },
        "mode": "light"
    }
}

const typographySettings = {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    }
  }

export default themer

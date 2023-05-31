import React from "react";
import {Typography,Box,Button} from '@mui/material';
import PageSelector from "../../components/admin/pageSelectorButton";
import {useAuth} from '../../utils/auth'
import MainPageText from "../../scenes/admin/mainPageText";

const MainPage = () =>{
    const auth = useAuth()

    function handleLogout(){
        auth.logout()
    }

    return(
        <Box 
            sx={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center',
                m:0.75, 
            }}
        >
            {/* Title */}
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    height:30
                }}
            >
                <Typography
                    align="center"
                    variant='h5'
                >
                    Chads Data Table Builder
                </Typography>
                <Button
                    onClick={handleLogout}
                >
                    Logout
                </Button>

            </Box>
             
            <Box
                sx={{
                    width:'100%',
                    minHeight:200,
                    border:1,
                    borderRadius:5,
                    pl:3
                }}
            >
                <MainPageText/>
            </Box>
            
            {/* Box containing page links */}
            <Box
                sx={{
                    m:1
                }}
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
            >
                <PageSelector link='/admin/filters' text='Filters Setup & Editing'/>
                <PageSelector link='/admin/theme' text='Theme Settings'/>
                <PageSelector link='/admin/images' text='Image Link Setup'/>
                <PageSelector link='/admin/general' text='General Settings'/>

            </Box>
        </Box>
    )
}

export default MainPage
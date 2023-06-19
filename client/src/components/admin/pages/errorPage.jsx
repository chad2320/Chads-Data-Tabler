import { Box,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const ErrorPage = () => {
    return (
        <Box>
            <Typography>Error. Sorry</Typography>
            <Link to='/'>Back Home</Link>
        </Box>
    )
}

export default ErrorPage
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import userAuth from '../../CRUD Operations/userAuth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()
  //console.log(auth)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    let acceptable = false
    let runThis = async () => {
      acceptable = await userAuth(username,password)
      if (acceptable) {
        auth.login(true);
        navigate('/admin')
      } 
    }
    runThis()
  };

  
  if(auth.user){
    return (
        <Box>
            <Typography>
                Sign In Successful!
            </Typography>
        </Box>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={auth.user}
        fullWidth
      >
        {auth.user ? 'Logged in' : 'Log in'}
      </Button>
    </form>
  );
}

export default LoginPage;
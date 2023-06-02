import React from 'react';
import { auth, provider } from './firebase';
import { Box, Button, Container, TextField } from '@mui/material';

const Login = () => {
  const handleLogin = async () => {
    try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Sign in with email and password
      const userCredential = await auth.signInWithEmailAndPassword(email, password);

      // Get the chatID from the user object (assuming it's stored in the user object)
      const chatID = userCredential.user.uid;

      // Redirect the user to the chat page with the chatID in the URL
      window.location.href = `/chat/${chatID}`;
    } catch (error) {
      // Handle login error
      console.log('Login error', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Sign in with Google
      const result = await auth.signInWithPopup(provider);
      console.log(result.user.uid)
      // Get the chatID from the user object (assuming it's stored in the user object)
      const chatID = result.user.uid;
      // Redirect the user to the chat page with the chatID in the URL
      window.location.href = `/chat/${chatID}`;
    } catch (error) {
      // Handle Google login error
      console.log('Google login error', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField required id="email" label="Email (required)" type="email" defaultValue="" />
        <TextField required id="password" label="Password (required)" type="password" defaultValue="" />
        <Button variant="outlined" onClick={handleLogin} sx={{margin:'1em',}}>
          Login
        </Button>
        <Button variant="outlined" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

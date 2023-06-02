import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function Landing() {
  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleSignUpClick = () => {
    window.location.href = "/signup";
  };

  return (
    <>
      <Container>
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
          <Typography variant='h4' component="div">Welcome to ChatSpeaks</Typography>
          <div style={{ margin: '1em' }}>Please Login or Sign up to continue</div>
          <div>
            <Button variant="outlined" onClick={handleLoginClick} sx={{ margin: '0.5em', borderColor: 'white', color: 'white' }}>Login</Button>
            <Button variant="outlined" onClick={handleSignUpClick} sx={{ margin: '0.5em', borderColor: 'white', color: 'white' }}>Sign Up</Button>
          </div>
        </Box>
      </Container>
    </>
  );
}

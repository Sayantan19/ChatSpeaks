import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header(){
  return (
    <AppBar position="static" sx={{padding:'1em'}}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          ChatSpeaks
        </Typography>
      </Toolbar>
    </AppBar>
  );
};



import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Topbar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar className='nav-color font-head' >
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}   centered>
             CART
            </Typography>
            <Button color="inherit"   >Back</Button>
          </Toolbar>
        </AppBar>
      </Box>
        
    )
}

export default Topbar

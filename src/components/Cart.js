import React from "react";
import Topbar from "./Topbar";
import {CartContextAct} from '../context/CartContext';
import { useContext } from 'react';
import { Box, Grid } from '@mui/material'
import Container from '@mui/material/Container';
import Shopping from './Shopping';


function Cart() {
    const {CartItem} =useContext(CartContextAct)
  return (
    <>
    <Box className="bg-color">
      <Topbar />
      <Container sx={{ mt: 4 }} >
       <Grid container spacing={2}>
       {CartItem.map((Item) => (
          <Grid item  xs={12} sm={6} md={4}  key={Item.id}>
            <Shopping product={Item} />
          </Grid>
        ))}
       </Grid>


       </Container>
       </Box>
    </>
  );
}

export default Cart;

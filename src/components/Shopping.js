
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from '@mui/material/Box';
import {CartContextAct} from '../context/CartContext';
import { useContext } from 'react';
import '../App.css'


function Shopping({ product }) {

  const {addToCart} =useContext(CartContextAct)

  return (
    <Card sx={{ maxWidth: 345 }} className='nav-color card-padding'>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt={product.title}
      />
      <CardContent className='nav-color'>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions className='nav-color'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            width: '100%',
          }}
        >
          <Button size="small"> <FavoriteIcon />  Wishlist</Button>
          <Button size="small" variant="contained" onClick={()=>addToCart(product)}>
         <ShoppingCartIcon/>
            Add to Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default Shopping;

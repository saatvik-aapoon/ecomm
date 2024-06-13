import React from 'react'
import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import Shopping from './Shopping';

function GridProducts({products}) {
    return (
       <Container>
       <Grid container spacing={2}>
       {products.map((product) => (
          <Grid item  xs={12} sm={6} md={4}  key={product.id}>
            <Shopping product={product} />
          </Grid>
        ))}
       </Grid>


       </Container>
    )
}

export default GridProducts

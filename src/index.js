import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import CartContext from './context/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/wishlist",
    element: <Wishlist/>,
  },
]);

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <CartContext>
    <RouterProvider router={router} />
    </CartContext>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

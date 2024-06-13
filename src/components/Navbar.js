import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GridProducts from "./GridProducts";
import { useState } from "react";
import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from "react-router-dom"; 
import '../App.css'

function Navbar() {
  const [value, setValue] = useState("1");
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;
        const categorizedData = products.reduce(
          (acc, product) => {
            if (!acc[product.category]) {
              acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
          },

          {}
        );
        setCategories(categorizedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(categories);
  const categoryKeys = Object.keys(categories);
  console.log(categoryKeys);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleNavigateWishList = (path) => {
    console.log("path at the navigate function",path);
    navigate(path)

  }

  return (
    <>
      {" "}
      <Box sx={{ typography: "body1" }} >
        <TabContext value={value} className='nav-color'>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
            }}
            className='nav-color'
          >
            <Box px={4}
             display="flex"
              alignItems="center"
              justifyContent="center"
            >
             <LocalMallIcon />
            </Box>

            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              {categoryKeys.map((category, index) => (
                <Tab label={category} value={index.toString()} key={category} />
              ))}
            </TabList>
            <Box
              px={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box mx={1}>
                <FavoriteBorderIcon  onClick={()=>handleNavigateWishList('/wishlist') }/>
              </Box>
              <Box mx={1}>
                <ShoppingCartIcon onClick={()=>handleNavigateWishList('/cart') } />
              </Box>
            </Box>
          </Box>
          {categoryKeys.map((category, index) => (
            <TabPanel value={index.toString()} key={category} className="bg-color">
              <GridProducts products={categories[category]} />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
}

export default Navbar;

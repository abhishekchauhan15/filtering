import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Sidebar from "./Sidebar";
import Products from "./Products";
import SortBar from "./SortBar";

const Component = styled(Box)`
  background-color: #ffff;
  margin: 20px 0 0 20px;
  padding: 20px;
  width: 78%;
`;

const Home = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      // console.log(data);
      setproducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "17%" }}>
          <Sidebar setFilterProducts={setFilterProducts} products={products}/>
        </div>
        <Component>
        <SortBar  setFilterProducts={setFilterProducts} products={products}/>
          <Products  filterProducts={filterProducts} />
        </Component>
      </div>
     
    </div>
  );
};

export default Home;

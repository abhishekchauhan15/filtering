import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Footer from "../footer/Footer";

const Component = styled(Box)`
  background-color: #ffff;
  margin: 20px 0 0 20px;
  padding: 20px;
  width: 78%;
`;

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "17%" }}>
          <Sidebar />
        </div>
        <Component>
          <Products />
        </Component>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

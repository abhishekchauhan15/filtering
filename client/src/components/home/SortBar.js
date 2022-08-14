import Button from "@mui/material/Button";
import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";

const SortBar = ({ products, setFilterProducts }) => {
  const togglePrice = (price) => {
    // console.log("tog");
    if (price === "low") {
      products.sort((a, b) =>
        a.price.localeCompare(b.price, undefined, { numeric: true })
      );
    } else {
      console.log("else");
      products.sort((a, b) =>
        b.price.localeCompare(a.price, undefined, { numeric: true })
      );
    }
    // console.log("before");
    setFilterProducts([...products, products]);
    // console.log("after");

    // console.log(products);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      Sort By:
      <Button
        style={{ marginLeft: "15px" }}
        onClick={() => togglePrice("high")}
      >
        Price - High to Low
      </Button>
      <Button style={{ marginLeft: "5px" }} onClick={() => togglePrice("low")}>
        {" "}
        Price -Low to High
      </Button>
    </div>
  );
};

export default SortBar;

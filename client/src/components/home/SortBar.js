import Button from "@mui/material/Button";
import React from "react";

const SortBar = ({ products, setFilterProducts }) => {

  const togglePrice = (price) => {
    console.log("tog")
    if (price === "low") {
      products.sort((a, b) =>
        a.price.localeCompare(b.price, undefined, { numeric: true })
      );
    } else if (price === "high") {
      console.log("else");
      products.sort((a, b) =>
        b.price.localeCompare(a.price, undefined, { numeric: true })
      );
      
    }
    console.log("before")
    setFilterProducts([...products]);
    console.log("after")

    console.log(products);
  };

  return (
    <div style={{marginBottom:"20px"}}>
      <Button  onClick={() => togglePrice("low")}>Price -Low to High</Button>
      <Button style={{ marginLeft: "20px" }} onClick={() => togglePrice("high")}>Price - High to Low</Button>
    </div>
  );
};

export default SortBar;

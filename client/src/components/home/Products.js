import React, { useEffect, useState } from "react";
import { Box, styled, Typography } from "@mui/material";


const Component = styled(Typography)`
  padding-left: 20px;
`;


const SubHeading = styled(Typography)`
  margin-left: 20px;
  display:inline-block;
  background-color: #26A541;
  color: #ffff;
  border-radius: 5px;
`;


const Products = () => {
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
    <div>
     
      {products.map((product) => {
        return (
          <Box key={product.id} style={{ marginBottom:"20px"}}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <div>
                  {" "}
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    style={{ width: 90 , height: 150 }}
                  />
                </div>
                <div>
                  {" "}
                  <Component>{product.name}</Component>
                  <SubHeading>{product.rating}⭐</SubHeading>
                  <Component>{product.discription}</Component>
                </div>
              </div>
              <div>
                {" "}
                {/* <Typography>{product.discount}</Typography> */}
                <Typography>{product.price}</Typography>
              </div>
            </div>
          </Box>
        );
      })}
    </div>
  );
};

export default Products;

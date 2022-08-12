import React, { useEffect, useState } from "react";
import { Box , styled, Typography} from "@mui/material";

const Component = styled(Box)`
    display: flex;
    margin:55px 130px 0 130px;
    justify-content: space-between;
`

const Container = styled(Box)`
    padding :12px 8px;
    text-align:center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 500;

`

const Navbar = () => {
  const [catogeries, setCatogeries] = useState([]);

  useEffect(() => {
    const fetchCatogeries = async () => {
      const res = await fetch("/api/catogeries");
      const data = await res.json();
      // console.log(data);
      setCatogeries(data);
    };
    fetchCatogeries();
  }, []);
    
    
  return (
    <div style={{backgroundColor:"#FFFF"}}>
    <Component>
      {catogeries.map((catogery) => {
          return (
              <Container key={catogery.id}>
                  <img src={catogery.url} alt={catogery.name} style={{width:64}} />
            <Text>{catogery.text}</Text>
          </Container>
        );
      })}
      </Component>
      </div>
  );
};

export default Navbar;

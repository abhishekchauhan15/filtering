import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

const Component = styled(Box)`
  background-color: #ffff;
  margin: 20px 0 0 20px;
  padding: 20px;
`;

const Heading = styled("h2")({
  fontSize: 20,
});

const Sidebar = ({ products, setFilterProducts }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleBrand = (brand) => {
    if (!selectedBrands.includes(brand)) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  const toggleRating = (rating) => {
    if (!selectedRatings.includes(rating)) {
      setSelectedBrands([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter((b) => b !== rating));
    }
  };

  useEffect(() => {
    setFilterProducts(
      products
        .filter((item) => {
          if (selectedBrands.length) return selectedBrands.includes(item.brand);
          return true;
        })

        .filter((item) => {
          if (selectedRatings.length)
            return selectedRatings.includes(Math.floor(Number(item.rating)));
          return true;
        })
    );
  }, [selectedBrands, products, setFilterProducts, selectedRatings]);
  
  return (
    <Component>
      <Heading> Filters </Heading>
      CATEGORIES <br />
      <br />
      Mobiles & Accessories PRICE <br /> <br />
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      BRAND
      <FormGroup>
        <FormControlLabel
          onClick={() => toggleBrand("Apple")}
          control={<Checkbox />}
          label="Apple"
        />
        <FormControlLabel
          onClick={() => toggleBrand("SAMSUNG")}
          control={<Checkbox />}
          label="Samsung"
        />
        <FormControlLabel
          onClick={() => toggleBrand("Mi")}
          control={<Checkbox />}
          label="Mi"
        />
        <FormControlLabel
          onClick={() => toggleBrand("POCO")}
          control={<Checkbox />}
          label="POCO"
        />
        <FormControlLabel
          onClick={() => toggleBrand("realme")}
          control={<Checkbox />}
          label="Realme"
        />
        <FormControlLabel
          onClick={() => toggleBrand("MOTOROLA")}
          control={<Checkbox />}
          label="MOTOROLA"
        />
      </FormGroup>
      CUSTOMER RATINGS
      <FormGroup>
        <FormControlLabel
          onClick={() => toggleRating(4)}
          control={<Checkbox />}
          label="4⭐ &above"
        />
        <FormControlLabel control={<Checkbox />} label="3⭐ &above" />
        <FormControlLabel control={<Checkbox />} label="2⭐ &above" />
        <FormControlLabel control={<Checkbox />} label="1⭐ &above" />
      </FormGroup>
    </Component>
  );
};

export default Sidebar;

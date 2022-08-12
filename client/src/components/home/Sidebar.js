import * as React from "react";
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

const Sidebar = () => {
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
        <FormControlLabel control={<Checkbox />} label="Apple" />
        <FormControlLabel control={<Checkbox />} label="Samsung" />
        <FormControlLabel control={<Checkbox />} label="Mi" />
        <FormControlLabel control={<Checkbox />} label="POCO" />
        <FormControlLabel control={<Checkbox />} label="Realme" />
        <FormControlLabel control={<Checkbox />} label="MOTOROLA" />
      </FormGroup>
      CUSTOMER RATINGS
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="4⭐ &above" />
        <FormControlLabel control={<Checkbox />} label="3⭐ &above" />
        <FormControlLabel control={<Checkbox />} label="2⭐ &above" />
        <FormControlLabel control={<Checkbox />} label="1⭐ &above" />
      </FormGroup>
    </Component>
  );
};

export default Sidebar;

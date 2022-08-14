import { ChangeCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box, styled } from "@mui/material";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = ({ value, changeInput }) => {
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        value={value}
        onChange={changeInput}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;

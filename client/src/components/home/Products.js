import React, { useEffect, useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import ReactPaginate from "react-paginate";
import Downlaod from "../../assets/download.png";

const Component = styled(Typography)`
  padding-left: 40px;
`;

const SubHeading = styled(Typography)`
  margin-left: 40px;
  display: inline-block;
  background-color: #26a541;
  color: #ffff;
  border-radius: 5px;
`;

const Prize = styled(Typography)`
  margin-left: 300px;
`;

const Page = styled(Box)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Products = ({ filterProducts }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [backToTop, setBackToTop] = useState(false);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setPageNumber(selectedPage);
  };

  const dsiplayProducts = filterProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <Box key={product.id} style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div>
                {" "}
                <img
                  src={product.image[0]}
                  alt={product.name}
                  style={{ width: 140, height: 230 }}
                />
              </div>
              <div>
                {" "}
                <Component>
                  <Component
                    style={{ fontWeight: "bold", marginBottom: "8px" }}
                  >
                    {product.name}
                  </Component>
                  <SubHeading style={{ marginBottom: "8px", paddingLeft:"5px" }}>
                    {product.rating}⭐
                  </SubHeading>
                </Component>
                <Component>
                  {product.discription.map((feature) => {
                    return (
                      <div key={feature.id}>
                        <Component>•{feature}</Component>
                      </div>
                    );
                  })}
                </Component>
              </div>
            </div>
            <Prize>
              {" "}
              <Typography style={{ fontWeight: "bold" }}>
                {product.price}
                <img
                  src={Downlaod}
                  alt={product.name}
                  style={{ width: 100, height: 30, marginLeft: "10px" }}
                />
              </Typography>
            </Prize>
          </div>
        </Box>
      );
    });

  return (
    <div>
      {dsiplayProducts}
      <Page>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(filterProducts.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previous-page"}
          nextLinkClassName={"next-page"}
          subContainerClassName={"pages pagination"}
        />
      </Page>
    </div>
  );
};

export default Products;

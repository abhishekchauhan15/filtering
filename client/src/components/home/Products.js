import React, { useEffect, useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import ReactPaginate from "react-paginate";

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
  margin-left: 400px;
`;

const Page = styled(Box)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`;

const Products = () => {
  const [products, setproducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [backToTop, setBackToTop] = useState(false);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setPageNumber(selectedPage);

  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      // console.log(data);
      setproducts(data);
    };
    fetchProducts();
  }, []);


    // const topFunction = () => {
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         setBackToTop(true);
  //       } else {
  //         setBackToTop(false);
  //       }
  //     });
  //   }, []);
  // }



  const dsiplayProducts = products
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
                <Component>{product.name}</Component>
                <SubHeading>{product.rating}⭐</SubHeading>
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
              <Typography>{product.price}</Typography>
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
        pageCount={Math.ceil(products.length / productsPerPage)}
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

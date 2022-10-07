import React, { useContext, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import PageContext from "../../../Context/PageContext";
import useGetProducts from "../../../hooks/useGetProducts";

const Product = () => {
  const { setPage } = useContext(PageContext);
  const [spinner, products, getProducts] = useGetProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>
              <Button
                variant="contained"
                onClick={() => {
                  setPage("AddProducts");
                }}
              >
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ image, name, price }) => {
            return (
              <TableRow key={name}>
                <TableCell>
                  <img src={image} style={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{price}$</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Product;

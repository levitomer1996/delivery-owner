import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import PageContext from "../../../Context/PageContext";

const Product = () => {
  const { setPage } = useContext(PageContext);
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
          <TableRow key={"dsa"}></TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Product;

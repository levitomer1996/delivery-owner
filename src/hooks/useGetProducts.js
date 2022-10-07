import React, { useState, useContext } from "react";
import deliver from "../api/deliver";
import AuthContext from "../Context/AutContext";
import getToken from "../Helpers/getToken";

export default () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const getProducts = async () => {
    try {
      setSpinner(true);
      const res = await deliver.get("business/getbusinessproducts", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      setProducts(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [spinner, products, getProducts];
};

import React from "react";
import CreateBusiness from "../Components/Pages/CreateBusiness/CreateBusiness";
import Init from "../Components/Pages/Init";
import Main from "../Components/Pages/Main";
import AddProduct from "../Components/Pages/Product/AddProduct";
import Product from "../Components/Pages/Product/Product";
import Signin from "../Components/Pages/Signin/Signin";
import SignUp from "../Components/Pages/Signup/Signup";
export default (page) => {
  switch (page) {
    case "Dashboard":
      return <Main />;
    case "init":
      return <Init />;
    case "signin":
      return <Signin />;
    case "signup":
      return <SignUp />;
    case "create_business":
      return <CreateBusiness />;
    case "Products":
      return <Product />;
    case "AddProducts":
      return <AddProduct />;
    default:
      break;
  }
};

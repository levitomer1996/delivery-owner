import React from "react";
import CreateBusiness from "../Components/Pages/CreateBusiness/CreateBusiness";
import Init from "../Components/Pages/Init";
import Main from "../Components/Pages/Main";
import Signin from "../Components/Pages/Signin/Signin";
import SignUp from "../Components/Pages/Signup/Signup";
export default (page) => {
  switch (page) {
    case "dashboard":
      return <Main />;
    case "init":
      return <Init />;
    case "signin":
      return <Signin />;
    case "signup":
      return <SignUp />;
    case "create_business":
      return <CreateBusiness />;
    default:
      break;
  }
};

import React from "react";
import Init from "../../Pages/Init";
import AdminDashboard from "../Pages/AdminDashboard";
import AddHorizotal from "../Pages/UI/AddHorizotal";
import UI from "../Pages/UI/UI";

export default (page) => {
  switch (page) {
    case "init":
      return <Init />;
    case "Dashboard":
      return <AdminDashboard />;
    case "UI":
      return <UI />;
    case "add_horizontal":
      return <AddHorizotal />;

    default:
      break;
  }
};

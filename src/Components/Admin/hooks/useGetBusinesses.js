import React, { useState } from "react";
import deliver from "../../../api/deliver";

export default () => {
  const [businesses, setBusinesses] = useState([]);

  const getBusinessesList = async () => {
    const res = await deliver.get("business/getbusinesses");

    setBusinesses(res.data);
  };
  return [businesses, getBusinessesList];
};

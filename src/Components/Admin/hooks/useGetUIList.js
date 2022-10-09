import React, { useState } from "react";
import deliver from "../../../api/deliver";

export default () => {
  const [UI, setUI] = useState(null);
  const getUI = async () => {
    try {
      const res = await deliver.get("ui/ui");
      console.log(res.data);
    } catch (error) {}
  };
  return [UI, getUI];
};

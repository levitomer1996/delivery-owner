import React, { useContext, useState } from "react";
import deliver from "../api/deliver";
import PageContext from "../Context/PageContext";
export default () => {
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);

  const { setPage } = useContext(PageContext);
  const signup = async (creds) => {
    try {
      setSpinner(true);
      const res = await deliver.post("auth/signupowner", creds);
      setSpinner(false);
      setPage("signin");
    } catch (error) {
      setSpinner(false);
      setError(true);
    }
  };
  return [error, spinner, signup];
};

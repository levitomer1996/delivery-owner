import React, { useContext, useState } from "react";
import deliver from "../api/deliver";
import AuthContext from "../Context/AutContext";
import PageContext from "../Context/PageContext";

export default () => {
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const { Signin } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);
  const signin = async (creds) => {
    try {
      setSpinner(true);
      const res = await deliver.post("auth/signinowner", creds);
      localStorage.setItem("ut", res.data.accessToken);
      Signin(res.data.user);
      setSpinner(false);
      setPage("Dashboard");
    } catch (error) {
      setSpinner(false);
      setError(true);
    }
  };
  return [error, spinner, signin];
};

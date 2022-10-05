import React, { useContext, useState } from "react";
import deliver from "../api/deliver";
import AuthContext from "../Context/AutContext";
import PageContext from "../Context/PageContext";
import getToken from "../Helpers/getToken";

export default () => {
  const { setPage } = useContext(PageContext);
  const [isInitFinished, setInit] = useState(false);
  const [error, setError] = useState(false);
  const { Signin } = useContext(AuthContext);
  const tokenSignin = async () => {
    const token = getToken();
    try {
      setInit(true);
      const res = await deliver.get("auth/tokensignin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      Signin(res.data);
      setInit(false);
    } catch (error) {
      setInit(false);
      setError(true);
    }
  };
  return [error, isInitFinished, tokenSignin];
};

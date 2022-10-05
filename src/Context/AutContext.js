import React, { useReducer } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, user: action.payload, isLogged: true };
    case "signout":
      return { ...state, user: null, isLogged: false };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
  });

  function d(type, data) {
    dispatch({ type, payload: data });
  }
  const Signin = (user) => {
    d("signin", user);
  };
  const Signout = () => {
    d("signout");
  };

  return (
    <AuthContext.Provider
      value={{
        Signin,
        Signout,
        authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

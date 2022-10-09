import React, { useReducer } from "react";

const AdminPageContext = React.createContext();
const AdminPageReducer = (state, action) => {
  switch (action.type) {
    case "set_page":
      return { ...state, page: action.payload };
  }
};

export const AdminPageProvider = ({ children }) => {
  const [adminPageState, dispatch] = useReducer(AdminPageReducer, {
    page: "init",
  });

  function d(type, data) {
    dispatch({ type, payload: data });
  }
  const setPage = (page) => {
    d("set_page", page);
  };
  return (
    <AdminPageContext.Provider
      value={{
        adminPageState,
        setPage,
      }}
    >
      {children}
    </AdminPageContext.Provider>
  );
};
export default AdminPageContext;

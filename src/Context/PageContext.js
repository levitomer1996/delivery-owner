import React, { useReducer } from "react";

const PageContext = React.createContext();
const PageReducer = (state, action) => {
  switch (action.type) {
    case "set_page":
      return { ...state, page: action.payload };
  }
};

export const PageProvider = ({ children }) => {
  const [pageState, dispatch] = useReducer(PageReducer, {
    page: "init",
  });

  function d(type, data) {
    dispatch({ type, payload: data });
  }
  const setPage = (page) => {
    d("set_page", page);
  };
  return (
    <PageContext.Provider
      value={{
        pageState,
        setPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export default PageContext;

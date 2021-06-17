import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContext = createContext();

//preparing higher order component and exporting the wrapper
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//exporting datalayer
export const useStateValue = () => useContext(StateContext);
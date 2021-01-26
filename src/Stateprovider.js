import React, { createContext, useContext, useReducer } from "react";

// init of data layer
export const StateContext = createContext();

// layer provider

export const Stateprovider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
    );

}


// usage provider
export const useStateValue = () => useContext(StateContext)
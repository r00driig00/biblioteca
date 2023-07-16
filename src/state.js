import React, { createContext, useState } from 'react';

const initialState = {
  readingList: [],
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addToReadingList = (book) => {
    setState((prevState) => ({
      ...prevState,
      readingList: [...prevState.readingList, book],
    }));
  };

  const removeFromReadingList = (book) => {
    setState((prevState) => ({
      ...prevState,
      readingList: prevState.readingList.filter((item) => item !== book),
    }));
  };

  return (
    <StateContext.Provider value={{ state, addToReadingList, removeFromReadingList }}>
      {children}
    </StateContext.Provider>
  );
};
import React, { createContext, useState, useContext } from 'react';

export const SavedProductsContext = createContext({
  savedProducts: [],
  addProduct: (product) => {},
  removeProduct: (productId) => {},
});

function SavedProductsContextProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState([]);

  const addProduct = (product) => {
    setSavedProducts((prevState) => {
        if (!prevState.some(item => item.id === product.id)) {
            return [...prevState, product]; 
        }
        return prevState;
    });
};

  const removeProduct = (productId) => {
    setSavedProducts((prevState) =>
      prevState.filter((product) => product.id !== productId)
    );
  };

  const value = {
    savedProducts,
    addProduct,
    removeProduct,
  };

  return (
    <SavedProductsContext.Provider value={value}>
      {children}
    </SavedProductsContext.Provider>
  );
}

export default SavedProductsContextProvider;

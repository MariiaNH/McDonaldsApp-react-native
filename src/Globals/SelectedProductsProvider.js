import React, {createContext, useState} from 'react';

const SelectedProductsContext = createContext([]);

const SelectedProductsProvider = ({ children}) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <SelectedProductsContext.Provider value={{selectedProducts, setSelectedProducts}}>
      {children}
    </SelectedProductsContext.Provider>
  );
};

export {SelectedProductsContext, SelectedProductsProvider}
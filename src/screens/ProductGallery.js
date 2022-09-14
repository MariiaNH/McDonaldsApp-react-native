import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { gStyle } from '../styles/style';
import { Categories } from '../components/Categories';
import { Popular } from '../components/Popular';

export default function ProductGallery({navigation}) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openedBasket, setOpenedBasket] = useState(false);

  const addProduct = (product) => {
    setSelectedProducts(product);
  };

    const deleteProduct = (product) => {
    setSelectedProducts(...selectedProducts.filter(selProd.id !== product.id));
  };

  const clearBasket = () => {
    setSelectedProducts([]);
  };

  const openeBasket = () => {
    setOpenedBasket(true);
  };

  const closeBasket = () => {
    setOpenedBasket(false);
  };


  return (
    <ScrollView style={gStyle.appContainer}>
      <StatusBar style="auto" />
      <Header 
        opene={openedBasket}
        
      />
      <Categories />
      <Popular />
    </ScrollView>
  );
}
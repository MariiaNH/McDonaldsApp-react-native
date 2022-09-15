import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { gStyle } from '../styles/style';
import { popular } from '../popular'
import { PopularItem } from './PopularItem'
import { SelectedProductsContext } from '../Globals/SelectedProductsProvider';


export const Popular = () => {
  const {selectedProducts, addProduct, deleteProduct, clearBasket} = useContext(SelectedProductsContext);
  const [active, setActive] = useState(null);

  const changeActive = (ind) => {
    setActive(ind);
  };

  return (
    <View>
      <Text style={gStyle.popularHeader1}>Popular</Text>

      <View style={gStyle.popularsContainer}>
        {popular.map((popular )=> (
          <PopularItem  
            key={popular.name} 
            name={popular.name} 
            price={popular.prise}
            image={popular.image} 
           />
          ))}
      </View>
    </View>
  );
};
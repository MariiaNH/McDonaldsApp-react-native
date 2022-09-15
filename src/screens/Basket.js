import React, { useContext } from 'react';
import { Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList } from 'react-native';
import { gStyle } from '../styles/style';
import { BasketHeader } from '../components/BasketHeader';
import { SelectedProductsContext } from '../Globals/SelectedProductsProvider';
import { BasketItem } from '../components/BasketItem';

export default function Basket({navigation}) {
  const { selectedProducts, setSelectedProducts } = useContext(SelectedProductsContext);

  const clearBasket = () => {
    setSelectedProducts([]);
  };

  return (
    <ScrollView style={gStyle.appContainer}>
      <StatusBar style="auto" />
      <BasketHeader navigation={navigation} />
      {selectedProducts.length > 0 
      ? <FlatList 
        style={gStyle.basketList}
        keyExtractor={item => item.name}
        data={selectedProducts}
        renderItem={({ item }) => (
          <BasketItem product={item} />
        )}
      />
      : <Text style={gStyle.categoriesHeader1}>There is no products in basket now</Text>
      }

     {selectedProducts.length > 0 && (
      <Pressable 
        style={gStyle.deleteBasketButton}
        onPressOut={() => clearBasket()}
      >
          <Text style={gStyle.deleteBasketButtonText}>Clear basket</Text>
        </Pressable>
     )}
    </ScrollView>
  );
}
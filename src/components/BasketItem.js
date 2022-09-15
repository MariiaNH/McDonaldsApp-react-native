import { useContext } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { gStyle } from '../styles/style';
import { SelectedProductsContext } from '../Globals/SelectedProductsProvider';


export const BasketItem = ({ product }) => {
  const { selectedProducts, setSelectedProducts } = useContext(SelectedProductsContext);

  const deleteBasketItem = (name) => {
    const newSelected = selectedProducts.filter(product => product.name !== name);
    setSelectedProducts(newSelected);
  };

  return (
      <View style={gStyle.basketItem}>
        <Image 
          style={gStyle.basketItemImage}
          source={{uri: product.image}}
        />

        <Text style={gStyle.basketItemText}>
          {product.name}
        </Text>

        <Text style={gStyle.basketItemPrice}>
          {product.price}
        </Text>

        <Pressable 
          style={gStyle.deleteBasketItemButton}
          onPressOut={() => deleteBasketItem(product.name)}
        >
          <Text style={gStyle.deleteBasketItemButtonText}>x</Text>
        </Pressable>
      </View>
  );
};
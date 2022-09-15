import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { gStyle } from '../styles/style';
import { useContext } from 'react';
import { COLORS } from '../styles/constants';
import { SelectedProductsContext } from '../Globals/SelectedProductsProvider';
import { popular } from '../popular';

export const PopularItem = ({name, image, price }) => {
  const { selectedProducts, setSelectedProducts } = useContext(SelectedProductsContext);

  const addProductItem = (productName) => {
    const newSelected = popular.find(popular => popular.name === productName);
    setSelectedProducts([...selectedProducts, newSelected]);
  };

  const showAlert = (prodName) => {
    return(
      Alert.alert(`Do you want ${prodName}?`,
      '',
      [
        {text: 'Not today'}, 
        {text: 'Add to basket', onPress: () => addProductItem(name)},
      ])
    );
  };

  return (
    <View style={[{backgroundColor: COLORS.white}, gStyle.popularProductItemContainer]}>
    <TouchableOpacity 
      style={gStyle.popularProductItem}
      onPress={() => showAlert(name)}
    >
      <View style={gStyle.categoriesImageContainer}>
        <Image source={{uri: image}} style={gStyle.categoriesImage} />
      </View>
      <Text style={gStyle.categoriesName}>{name}</Text>
      <Text style={gStyle.popularProductPrise}>{price}</Text>
    </TouchableOpacity>
    </View>
  );
};
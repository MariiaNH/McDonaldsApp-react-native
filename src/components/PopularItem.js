import { View, TouchableOpacity, Image, Text } from 'react-native';
import { gStyle } from '../styles/style';
import { COLORS } from '../styles/constants';

export const PopularItem = ({name, image, price }) => {
  return (
    <View style={[{backgroundColor: COLORS.lightGray1}, gStyle.popularProductItemContainer]}>
    <TouchableOpacity 
      style={gStyle.popularProductItem}
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
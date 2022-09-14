import { View, TouchableOpacity, Image, Text } from 'react-native';
import { gStyle } from '../styles/style';
import { COLORS } from '../styles/constants';

export const CategoryItem = ({name, index, image, active, setActive }) => {
  return (
    <View style={[{backgroundColor: active === index ? COLORS.secondary : COLORS.lightGray1}, gStyle.categoriesProductItemContainer]}>
    <TouchableOpacity 
      style={gStyle.categoriesProductItem}
      underlayColor={COLORS.secondary}
      onPress={() => setActive(index)}
    >
      <View style={gStyle.categoriesImageContainer}>
        <Image source={{uri: image}} style={gStyle.categoriesImage} />
      </View>
      <Text style={gStyle.categoriesName}>{name}</Text>
    </TouchableOpacity>
    </View>
  );
};
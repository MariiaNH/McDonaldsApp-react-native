import { View, Linking, Image, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { gStyle } from '../styles/style';

export const Header = ({ open }) => {
  const [openedBasket, setOpenedBasket] = useState(open);
  return (
    <View style={gStyle.headerContainer}>
      <TouchableHighlight 
        onPress={() => Linking.openURL('https://www.mcdonalds.com/ua/uk-ua.html')}
      >
        <Image 
          style={gStyle.headerLogo}
          source={{uri: 'data:image/png;base64,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'}}  
        />
      </TouchableHighlight>
      <View>
      <Image 
          style={gStyle.headerShoping}
          source= {{uri: 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'}}
          />
      </View>
    </View>
  );
};
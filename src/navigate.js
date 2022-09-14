import React from 'react';
import ProductGallery from '../src/screens/ProductGallery';
import Basket from '../src/screens/Basket';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="ProductGallery"
        component={ProductGallery}
        options={{
          headerStyle: { backgroundColor: '#4d4d4d', height: 80},
          headerTitleStyle: { color: '#f1dad0', fontWeight: '800' },
        }}
      />
      <Stack.Screen 
        name="Basket"
        component={Basket}
        options={{
          headerStyle: { backgroundColor: '#4d4d4d', height: 80},
          headerTitleStyle: { color: '#f1dad0', fontWeight: '800' },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
};
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { gStyle } from '../styles/style';
import { categories } from '../categories'
import { CategoryItem } from './CategoryItem'

export const Categories = () => {
  const [active, setActive] = useState(null);

  const changeActive = (ind) => {
    setActive(ind);
  };

  return (
    <View>
      <Text style={gStyle.categoriesHeader1}>Hey,</Text>
      <Text style={gStyle.categoriesHeader2}>What's up?</Text>

      <View style={gStyle.categoriesContainer}>
        {categories.map((cat, index )=> (
          <CategoryItem  
            key={cat.name} 
            name={cat.name} 
            index={index} 
            image={cat.image} 
            active={active}
            setActive={changeActive}
           />
          ))}
      </View>
    </View>
  );
};
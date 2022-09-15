import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { ProductGalleryHeader } from '../components/ProductGalleryHeader';
import { gStyle } from '../styles/style';
import { Categories } from '../components/Categories';
import { Popular } from '../components/Popular';

export default function ProductGallery({navigation}) {

  return (
    <ScrollView style={gStyle.appContainer}>
      <StatusBar style="auto" />
      <ProductGalleryHeader navigation={navigation} />
      <Categories />
      <Popular />
    </ScrollView>
  );
}
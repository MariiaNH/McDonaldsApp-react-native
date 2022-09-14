import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { gStyle } from '../styles/style';

export default function Basket({navigation}) {

  return (
    <ScrollView style={gStyle.appContainer}>
      <StatusBar style="auto" />
      <Header    
      />
      <FlatList></FlatList>
    </ScrollView>
  );
}
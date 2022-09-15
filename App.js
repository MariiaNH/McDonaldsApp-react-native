import React from 'react';
import { SelectedProductsProvider } from './src/Globals/SelectedProductsProvider';
import MainStack from './src/navigate'

export default function App() {

  return (
    <SelectedProductsProvider>
          <MainStack />
    </SelectedProductsProvider>
  );
}
import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import AuthContextProvider from './context/auth-context';
import SavedProductsContextProvider from './context/saved-products-context';

export default function App() {
  return (
    <AuthContextProvider>
      <SavedProductsContextProvider>
       <NavigationContainer> 
         <StackNavigator/> 
       </NavigationContainer> 
      </SavedProductsContextProvider>
    </AuthContextProvider>
  );
}


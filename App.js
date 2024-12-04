import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import AuthContextProvider from './context/auth-context';

export default function App() {
  return (
    <AuthContextProvider>
       <NavigationContainer> 
         <StackNavigator/> 
       </NavigationContainer> 
    </AuthContextProvider>
  );
}


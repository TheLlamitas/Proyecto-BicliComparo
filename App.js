import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import AuthContextProvider from './context/auth-context';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </AuthContextProvider>
  );
}


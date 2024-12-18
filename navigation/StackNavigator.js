import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InformationScreen from "../screens/InformationScreen"
import AdminScreen from "../screens/AdminScreen";
import CategoriaScreen from "../screens/CategoriaScreen";
import TiendaScreen from "../screens/TiendaScreen";
import GuardadosScreen from "../screens/GuardadosScreen";


const Stack = createStackNavigator();


function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="InicioTab" component={TabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Information" component={InformationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Admin" component={AdminScreen} options={{ title: "Admin" }}/>
            <Stack.Screen name="Categoria" component={CategoriaScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Tienda" component={TiendaScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Guardados" component={GuardadosScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export default StackNavigator;
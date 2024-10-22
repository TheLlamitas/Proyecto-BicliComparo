import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InformationScreen from "../screens/InformationScreen"


const Stack = createStackNavigator();


function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Information" component={InformationScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export default StackNavigator;
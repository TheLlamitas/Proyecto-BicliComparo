import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';
import SettingsScreen from "../screens/SettingScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerStyle: { 
                    backgroundColor: 'darkred', 
                    width: 240, 
                },
                drawerActiveTintColor: 'white',
                drawerInactiveBackgroundColor: 'gray',
                drawerLabelStyle: {
                    fontSize: 16,
                },
        }}>
            <Drawer.Screen name="InicioStack" component={StackNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Setting" component={SettingsScreen} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
}
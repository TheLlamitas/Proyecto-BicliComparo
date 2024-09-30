import *as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Inicio from '../screens/Inicio';
import Categorias from '../screens/Categorias';
import Tiendas from '../screens/Tiendas';
import Mas from '../screens/Mas';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown : false,
                tabBarIcon: ({ focused, color, size}) => {
                    let IconName;

                    if(route.name === 'Inicio') {
                        IconName = 'home';
                    } else if(route.name === 'Categorias') {
                        IconName = 'apps';
                    } else if(route.name === 'Tiendas') {
                        IconName = 'storefront';
                    }else if(route.name === 'Mas') {
                        IconName = 'menu';
                    }
                    return <Icon name={IconName} size={18} color={color}/>
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#373739'
                },
                tabBarActiveBackgroundColor: '#6D6D6D',
            })}
        >
            <Tab.Screen name='Inicio' component={Inicio}/>
            <Tab.Screen name='Categorias' component={Categorias}/>
            <Tab.Screen name='Tiendas' component={Tiendas}/>
            <Tab.Screen name='Mas' component={Mas}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;
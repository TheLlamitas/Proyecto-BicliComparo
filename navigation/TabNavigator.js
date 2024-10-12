import *as React from 'react';
import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Inicio from '../screens/Inicio';
import Categorias from '../screens/Categorias';
import Tiendas from '../screens/Tiendas';
import Profile from '../screens/Profile';
import { AuthContext } from '../context/auth-context';
import defaultProfilePic from '../assets/images/profile-mikasa.jpeg';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const { isLoggedIn } = React.useContext(AuthContext);
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
                    }else if(route.name === 'Perfil') {
                        if (isLoggedIn) {
                            return(
                                <Image source={defaultProfilePic}
                                style = {{width: 25, height:25, borderRadius: 12,}}/>
                            )
                        } else {
                            IconName = 'person'
                        }
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
            <Tab.Screen name='Perfil' component={Profile}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;
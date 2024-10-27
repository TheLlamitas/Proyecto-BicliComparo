// CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logoBC.png')} style={styles.logo} />
        <Text style={styles.title}>BicliComparo</Text>
      </View>

      <TouchableOpacity 
        style={styles.drawerButton} 
        onPress={() => props.navigation.navigate('InicioTab')}
      >
        <Icon name="home" size={20} color="white" />
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerButton} 
        onPress={() => props.navigation.navigate('Setting')}
      >
        <Icon name="settings" size={20} color="white" />
        <Text style={styles.drawerText}>Configuración</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="information-circle" size={20} color="white" />
          <Text style={styles.footerText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 0,
    backgroundColor: 'darkred',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  drawerText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomDrawerContent;

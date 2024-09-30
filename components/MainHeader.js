import React from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function MainHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#8B0000" />
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/images/logoBC.png')} style={styles.logo} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" size={15} color="white" />
        </TouchableOpacity>
        <TextInput
          placeholder="Buscar..."
          placeholderTextColor="white"
          style={styles.input}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="notifications" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="star" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="person" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black', 
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#8B0000', // Fondo de la barra principal
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 78,
    height: 73,
    marginLeft: 0,
    borderRadius: 60,
  },
  searchIconContainer: {
    marginLeft: 20, // Espacio entre el logo y el icono de búsqueda
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 121,
    height: 27,
    backgroundColor: 'rgba(139, 0, 0, 0.7)',
    color: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    paddingLeft: 5,
    marginLeft: 1, // Espacio entre el icono de búsqueda y el input
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 20, // Empuja los íconos hacia la derecha
  },
  icon: {
    marginLeft: 5, // Espacio entre los iconos
  },
});

export default MainHeader;

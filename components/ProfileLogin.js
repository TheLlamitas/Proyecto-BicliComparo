import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/auth-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const menuOptions = [
  { name: 'Editar Perfil', icon: 'person', library: 'MaterialIcons' },
  { name: 'Historial', icon: 'book-open', library: 'FontAwesome5' },
  { name: 'Guardados', icon: 'bookmark', library: 'MaterialIcons' }
];


function ProfileScreen() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();


  if (!authCtx.isLoggedIn) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/default-avatar.jpg')} style={styles.profileImage} />
        <Button title="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/profile-mikasa.jpeg')} style={styles.profileImage} />
      <Text style={styles.emailText}>Correo: {authCtx.email}</Text>
      <View style={styles.optionsContainer}>
      {menuOptions.map((option, index) => (
                <TouchableOpacity key={index} style={styles.optionButton}>
                    {option.library === 'MaterialIcons' ? (
                        <MaterialIcons name={option.icon} size={24} color='white' style={styles.icon} />
                    ) : (
                        <FontAwesome5 name={option.icon} size={24} color='white' style={styles.icon} />
                    )}
                    <Text style={styles.optionText}>{option.name}</Text>
                </TouchableOpacity>
      ))}
      </View>
        <TouchableOpacity style={styles.logoutButton} onPress={authCtx.logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  emailText: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
  },
  optionsContainer: {
    marginTop: 20,
    width: '150%',
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: 'darkred',
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});


export default ProfileScreen;

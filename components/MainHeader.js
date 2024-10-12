import React, {useState} from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function MainHeader() {
  const navigation = useNavigation();
  const [searchVisible, setSeacrhVisisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Image source={require('../assets/images/logoBC.png')} style={styles.logo} />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            {searchVisible && (
              <TextInput
                placeholder="Buscar..."
                placeholderTextColor="white"
                style={styles.input}
              />
            )}
          </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => setSeacrhVisisible(!searchVisible)}>
            <Icon name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="notifications" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="star" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'darkred', 
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  logo: {
    alignItems: 'flex-start',
    width: 78,
    height: 73,
    borderRadius: 60,
  },
  searchContainer: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'darkred',
    width: 100,
    height: 10,
    color: 'black',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 0,
    paddingHorizontal: 5,
    textAlignVertical: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 5, 
  },
});

export default MainHeader;

import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const categories = [
    {name: 'fox', image: require('../assets/images/StoresLogo/fox.png')},
    {name: 'onvelo', image: require('../assets/images/StoresLogo/onvelo.jpg')},
    {name: 'cycle', image: require('../assets/images/StoresLogo/cyclerwear.png')},
    {name: 'clemmons', image: require('../assets/images/StoresLogo/clemmons.png')},
    {name: 'trek', image: require('../assets/images/StoresLogo/trek.png')},
    {name: 'bikehouse', image: require('../assets/images/StoresLogo/BikeHouse.png')},
    {name: 'ciclomundo', image: require('../assets/images/StoresLogo/ciclomundo.webp')},
    {name: 'ronin', image: require('../assets/images/StoresLogo/ronin.webp')},
    {name: 'ciclismoel', image: require('../assets/images/StoresLogo/ciclismoel.png')},
];

const ButtonTienda = () => {
    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton}>
                        <Image
                            source={category.image}
                            style={styles.categoryImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 3,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    shadowWrapper: {
        width: '47%',
        backgroundColor: 'rgba(139, 0, 0, 0.3)', 
        borderRadius: 40,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 5, 
        left: 5,
        right: 5,
        bottom: 5,
        zIndex: -1, 
    },
    categoryButton: {
        width: '48%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        marginHorizonta: 5,
        justifyContent: 'center',
        shadowColor: 'darkred',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 10, 
    },
    categoryImage: {
        width: 100,
        height: 100,
    },
})

export default ButtonTienda;
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const products = [
    { id: 1, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },
    { id: 2, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },
    { id: 3, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },
    { id: 4, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },
    { id: 5, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },
    { id: 6, name: "Bicicleta de Montaña Trek Marlin 7", price: "$3.000.000", previousPrice: "$4.000.000", image: require('../assets/images/marlin5.webp'), logo: require('../assets/images/onvelo.jpg') },


];


const ProductList = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.productList}>
            {products.map(product => (
                <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => navigation.navigate('Information')}>
                    <Image source={product.image} style={styles.productImage} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.previousPrice}>{product.previousPrice}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>
                    <Image source={product.logo} style={styles.storeLogo}/>
                </TouchableOpacity>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    productList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productCard: {
        width: 115,
        height: 218,
        backgroundColor: 'white',
        marginHorizontal: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        padding: 1,
    },
    productImage: {
        width: 113,
        height: '50%',
        resizeMode: 'absolute',
        marginBottom: 5,
    },
    productName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginBottom: 5,
    },
    priceContainer: {
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    previousPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        color: 'red',
    },
    price: {
        fontSize: 18,
        color: 'black',
    },
    storeLogo: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
});


export default ProductList;

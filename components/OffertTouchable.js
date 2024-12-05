import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getProducts } from "../utils/db";


const OffertTouchable = () => {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            const filteredProducts = products.filter(product => product.previousPrice > 0);
            setFetchedProducts(filteredProducts);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading restaurants...</Text>
          </View>
        );
      }

    return (
        <View style={styles.container}>
            {fetchedProducts.length === 0 ? (
            <Text>No restaurants available</Text>
        ) : (
            fetchedProducts.map((product, index) => (
                <TouchableOpacity key={index} style={styles.touchableContainer} onPress={() => navigation.navigate('Information', { product })}>
            <Image source={{ uri: product.mainImage }} style={styles.productImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.productName}>
                    {product.name.length > 50 ? `${name.substring(0, 50)}...` : product.name}
                </Text>
                <Text style={styles.strikethroughPrice}>${product.previousPrice} COP</Text>
                <View style={styles.priceLogoContainer}>
                    <Text style={styles.price}>${product.price} COP</Text>
                    <Image source={{ uri: product.storeLogo }} style={styles.storeLogo} />
                </View>
                <Text style={styles.description}>
                    {product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}
                </Text>
            </View>
        </TouchableOpacity>
            ))
        )}
        </View>
        
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    touchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 111,
        padding: 10,
        backgroundColor: 'black',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        paddingLeft: 0,
    },
    productImage: {
        width: 92,
        height: 100,
        marginRight: 3,
    },
    infoContainer: {
        justifyContent: 'center',
        width: '78%',
    },
    productName: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    priceLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
    },
    strikethroughPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        color: 'red',
        marginRight: 10,
    },
    price: {
        fontSize: 16,
        color: 'white',
        marginRight: 120,
    },
    storeLogo: {
        width: 25,
        height: 15,
    },
    description: {
        fontSize: 11,
        color: 'gray',
        marginTop: 5,
    },
});


export default OffertTouchable;

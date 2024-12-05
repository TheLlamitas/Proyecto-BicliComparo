import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getProducts } from "../utils/db";


const ProductList = () => {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            const filteredProducts = products.filter(product => product.previousPrice === 0);
            setFetchedProducts(filteredProducts);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const truncateText = (text, limit = 50) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Loading restaurants...</Text>
            </View>
          );
    }

    return (
        <View style={styles.productList}>
            {fetchedProducts.length === 0 ? (
                <Text>No product available</Text>
            ) : (
                fetchedProducts.map((product, index) => (
                    <TouchableOpacity key={index} style={styles.productCard} onPress={() => navigation.navigate('Information', { product })}>
                    <Image source={{ uri: product.mainImage }} style={styles.productImage} />
                    <Text style={styles.productName}>{truncateText(product.name)}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${product.price} COP</Text>
                    </View>
                    <Image source={{ uri: product.storeLogo }} style={styles.storeLogo}/>
                </TouchableOpacity>
                ))
            )}
                
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
    price: {
        paddingTop: 20,
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default ProductList;

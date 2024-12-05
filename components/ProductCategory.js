import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getProducts } from "../utils/db";

const { width } = Dimensions.get('window');

const ProductCategory = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params; 
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            const filteredProducts = products.filter(
                product => product.category === category
            );
            setFetchedProducts(filteredProducts);
            setLoading(false);
        }
        fetchProducts();
    }, [category]);

    const truncateText = (text, limit = 50) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading products...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            <View style={styles.line} />

            <View style={styles.productList}>
                {fetchedProducts.length === 0 ? (
                    <Text style={styles.categoryTitle} >No products available in this category</Text>
                ) : (
                    fetchedProducts.map((product, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.productCard} 
                            onPress={() => navigation.navigate('Information', { product })}
                        >
                            <Image source={{ uri: product.mainImage }} style={styles.productImage} />
                            <Text style={styles.productName}>{truncateText(product.name)}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.previousPrice}>${product.previousPrice}</Text>
                                <Text style={styles.price}>${product.price}</Text>
                            </View>
                            <Image source={{ uri: product.storeLogo }} style={styles.storeLogo} />
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 1,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 3,
    },
    line: {
        width: width * 0.6,
        height: 3,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 5,
    },
    productList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productCard: {
        width: 115,
        height: 218,
        backgroundColor: 'white',
        marginHorizontal: 2,
        marginVertical: 2,
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
        color: 'red',
        textDecorationLine: 'line-through',
    },
    price: {
        paddingTop: 10,
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

export default ProductCategory;

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getProducts } from "../utils/db"; // Asumo que esta función te trae los productos

const { width } = Dimensions.get("window");

const storeDetails = [
  { name: 'fox', logo: require('../assets/images/StoresLogo/fox.png'), description: 'Store selling mountain bikes and accessories.' },
  { name: 'onvelo', logo: require('../assets/images/StoresLogo/pearlizumi.png'), description: 'Store specializing in road cycling gear.' },
  { name: 'cycle', logo: require('../assets/images/StoresLogo/knog.webp'), description: 'Leading store for cycling enthusiasts.' },
  { name: 'clemmons', logo: require('../assets/images/StoresLogo/clemmons.png'), description: 'Store offering a variety of bikes and parts.' },
  { name: 'trek', logo: require('../assets/images/StoresLogo/trek.png'), description: 'One of the top bike manufacturers worldwide.' },
  { name: 'bikehouse', logo: require('../assets/images/StoresLogo/BikeHouse.png'), description: 'Bike store with a wide range of products.' },
  { name: 'ciclomundo', logo: require('../assets/images/StoresLogo/ciclomundo.webp'), description: 'Cycling store with focus on high-end bikes.' },
  { name: 'ronin', logo: require('../assets/images/StoresLogo/ronin.webp'), description: 'Specialized bike shop catering to all levels.' },
  { name: 'ciclismoel', logo: require('../assets/images/StoresLogo/ciclismoel.png'), description: 'Cycling store for enthusiasts and experts.' },
  { name: 'bell', logo: require('../assets/images/StoresLogo/bell.png'), description: 'Popular store for helmets and cycling accessories.' },
];

const ProductCategory = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { storeName } = route.params; 
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const store = storeDetails.find(store => store.name === storeName);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            console.log("All products:", products);  
    
            const filteredProducts = products.filter(
                product => product.store.trim().toLowerCase() === storeName.trim().toLowerCase()
            );
    
            console.log("Filtered products:", filteredProducts);
            setFetchedProducts(filteredProducts);
            setLoading(false);
        }
        fetchProducts();
    }, [storeName]);
    

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
            <View style={styles.storeInfo}>
                <Image source={store.logo} style={styles.storeLogoPrincipal} />
                <Text style={styles.storeDescription}>{store.description}</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.productList}>
                {fetchedProducts.length === 0 ? (
                    <Text style={styles.categoryTitle}>No products available in this store</Text>
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
                                <Text style={styles.previousPrice}>${product.previousPrice} COP</Text>
                                <Text style={styles.price}>${product.price} COP</Text>
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
        padding: 10,
    },
    storeInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    storeLogoPrincipal: {
        width: 350,
        height: 100,
    },
    storeLogo: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    storeDescription: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
    },
    line: {
        width: width * 1,
        height: 1,
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
        resizeMode: 'cover',
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
        paddingTop: 1,
        fontSize: 18,
        color: 'black',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProductCategory;

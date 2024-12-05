import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SavedProductsContext } from "../context/saved-products-context";
import MainHeader from "../components/MainHeader";

export default function SavedProductsScreen() {
    const { savedProducts } = useContext(SavedProductsContext);
    const navigation = useNavigation();

    const renderProduct = ({ item: product, index }) => (
        <TouchableOpacity
            key={index}
            style={styles.touchableContainer}
            onPress={() => navigation.navigate("Information", { product })}
        >
            <Image source={{ uri: product.mainImage }} style={styles.productImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.productName}>
                    {product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}
                </Text>
                <Text style={styles.strikethroughPrice}>${product.previousPrice} COP</Text>
                <View style={styles.priceLogoContainer}>
                    <Text style={styles.price}>${product.price} COP</Text>
                    <Image source={{ uri: product.storeLogo }} style={styles.storeLogo} />
                </View>
                <Text style={styles.description}>
                    {product.description.length > 80
                        ? `${product.description.substring(0, 80)}...`
                        : product.description}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <MainHeader/>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            {savedProducts.length === 0 ? (
                <Text style={styles.emptyMessage}>No hay productos guardados.</Text>
            ) : (
                <FlatList
                    data={savedProducts}
                    renderItem={renderProduct}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    backButton: {
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    touchableContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 111,
        padding: 10,
        backgroundColor: "black",
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
        paddingLeft: 0,
    },
    productImage: {
        width: 92,
        height: 100,
        marginRight: 3,
    },
    infoContainer: {
        justifyContent: "center",
        width: "78%",
    },
    productName: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    priceLogoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 0,
    },
    strikethroughPrice: {
        fontSize: 12,
        textDecorationLine: "line-through",
        color: "red",
        marginRight: 10,
    },
    price: {
        fontSize: 16,
        color: "white",
        marginRight: 120,
    },
    storeLogo: {
        width: 25,
        height: 15,
    },
    description: {
        fontSize: 11,
        color: "gray",
        marginTop: 5,
    },
    emptyMessage: {
        color: "gray",
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
    },
});

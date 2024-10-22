import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const OffertTouchable = ({ product }) => {
    const navigation = useNavigation();


    const { name, price, strikethroughPrice, storeLogo, description, image } = product;


    return (
        <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Information')}>
            <Image source={image} style={styles.productImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.productName}>
                    {name.length > 50 ? `${name.substring(0, 50)}...` : name}
                </Text>
                <Text style={styles.strikethroughPrice}>{strikethroughPrice}</Text>
                <View style={styles.priceLogoContainer}>
                    <Text style={styles.price}>{price}</Text>
                    <Image source={storeLogo} style={styles.storeLogo} />
                </View>
                <Text style={styles.description}>
                    {description.length > 80 ? `${description.substring(0, 80)}...` : description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
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

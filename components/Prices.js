import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/auth-context";


export default function Prices({ title, description, price, originalPrice, storeLogo }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const {isLoggedIn} = useContext(AuthContext);
    const navigation = useNavigation();


    const handleBookmarkPress = () => {
        if (!isLoggedIn) {
            Alert.alert(
                "Iniciar Sesion",
                "Debes iniciar sesion para guardar productos",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Iniciar Sesion",
                        onPress: () => navigation.navigate('Login'),
                    },
                ]
            )
        } else {
            setIsBookmarked(!isBookmarked);
        }
    }


    return (
    <View style={styles.container}>
            <View style={styles.centerdeContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View styles={styles.leftAlignedContainer}>
                <Text style={styles.offerPriceLabel}>Precio de Oferta</Text>
                <Text style={styles.strikethroughPrice}>${price}</Text>
                <Text style={styles.currentPrice}>${originalPrice}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.storeButton}>
                    <Text style={styles.storeButtonText}>Ir a la tienda</Text>
                        <Image source={{ uri: storeLogo }}
                        style={styles.storeIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bookmarkButton]}
                    onPress={handleBookmarkPress}>
                        <Ionicons name="bookmark" size={20} color={isBookmarked ? 'darkred' : 'white'} />
                        <Text style={styles.bookmarkButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
    },
    centeredContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    leftAlignedContainer: {
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    description: {
        fontSize: 11,
        marginBottom: 20,
        color: 'white',
    },
    offerPriceLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    strikethroughPrice: {
        fontSize: 15,
        color: 'red',
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    currentPrice: {
        fontSize: 25,
        marginBottom: 10,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    storeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8B0000',
        width: 181,
        height: 48,
        borderRadius: 40,
        marginRight: 10,
    },
    storeButtonText: {
        color: 'white',
        fontSize: 16,
        marginRight: 10,
    },
    storeIcon: {
        width: 60,
        height: 14,
    },
    bookmarkButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    bookmarkButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
    },
})
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainHeader from "../components/MainHeader";
import ProductCategory from "../components/ProductCategory";
import { useNavigation } from "@react-navigation/native";

export default function CategoriaScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <MainHeader />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <ProductCategory />
                <Text style={styles.text}>Todos los derechos reservados 2024</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewContent: {
        flexGrow: 1,
        backgroundColor: 'black', 
        marginLeft: 1, 
    },
    backButton: {
        marginTop: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 3,
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
});

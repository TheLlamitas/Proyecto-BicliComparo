import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import MainHeader from "../components/MainHeader";
import ButtonTienda from "../components/ButtonTienda";

const { width } = Dimensions.get('window');

export default function Tiendas () {
    return (
        <View style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <MainHeader />
                <View style={styles.safeArea}>
                    <Text style={styles.title}>Tiendas</Text>
                    <View style={styles.line} />
                    <ButtonTienda />
                    <View style={styles.container}>
                        <Text style={styles.text}>Todos los derechos reservados 2024</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewContent: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: 10 ,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    line: {
        width: width * 0.6,
        height: 3,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 5,
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20, // Espacio superior e inferior
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
});
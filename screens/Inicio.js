import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import MainHeader from "../components/MainHeader";
import ImageCarousel from "../components/ImageCarousel";
import ProductList from "../components/ProductList"; // Asegúrate de que el nombre sea correcto
import OffertList from "../components/OffertList";


const { width } = Dimensions.get('window');


export default function Inicio() {
    return (
        <View style={styles.safeArea}>
            <MainHeader/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                <ImageCarousel />
                    <Text style={styles.highlightedProducts}>Productos Destacados</Text>
                    <View style={styles.line} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                        <ProductList />
                    </ScrollView>
                    <View style={styles.line} />
                    <Text style={styles.highlightedProducts}>Nuevas Ofertas</Text>
                    <View style={styles.line} />
                    <OffertList />
                </View>


                <Text style={styles.text}>Todos los derechos reservados 2024</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    highlightedProducts: {
        color: 'white',
        fontSize: 20,
        paddingTop: 20,
        marginBottom: 10,
    },
    line: {
        width: width * 1,
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginVertical: 2,
    },
    horizontalScroll: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
});

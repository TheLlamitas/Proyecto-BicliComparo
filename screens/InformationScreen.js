import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainHeader from "../components/MainHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import CarouselProduct from "../components/CarouselProduct";
import Prices from "../components/Prices";
import OffertList from "../components/OffertList";


const { width } = Dimensions.get('window');


export default function InformationScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { product } = route.params;


    const data = [{ key: 'content' }];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.safeArea}>
                <MainHeader />
                <FlatList
                    data={data}  
                    renderItem={() => (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back" size={24} color="white" />
                            </TouchableOpacity>
                           
                            {product ? (
                            <View style={styles.carouselContainer}>   
                                <CarouselProduct gallery={product.gallery}/>
                                <Text>No product data available.</Text>
                            </View>
                            ) : (
                                <Text>No product data available.</Text>
                            )}
                           
                            {product ? (
                                <Prices 
                                name={product.name}
                                description={product.description}
                                previousPrice={product.previousPrice}    
                                price={product.price}
                                storeLogo={product.storeLogo}
                            />
                            ) : (
                                <Text>No product data available.</Text>
                            )}
                            <View style={styles.line} />
                            <Text style={styles.highlightedProducts}>Otras Ofertas</Text>
                            <View style={styles.line} />
                            {product ? (
                                <OffertList 
                                    name={product.name}
                                    description={product.description}
                                    previousPrice={product.previousPrice}    
                                    price={product.price}
                                    storeLogo={product.storeLogo}
                                />
                            ) : (
                                <Text>No product data available.</Text>
                            )}
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                    ListFooterComponent={() => (
                        <Text style={styles.text}>Todos los derechos reservados 2024</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    backButton: {
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    carouselContainer: {
        marginTop: 10,
        width: '100%',
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
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
    productImage: {
        width: 92,
        height: 111,
        borderRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
});

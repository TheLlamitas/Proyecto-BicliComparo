import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import OffertTouchable from '../components/OffertTouchable';


const products = [
    {
        id: '1',
        name: "Bicicleta de Montaña Trek Marlin 7 Gen 2",
        price: "$2.990.000",
        strikethroughPrice: "$3.890.000",
        storeLogo: require('../assets/images/StoresLogo/fox.png'),
        description: "Es ideal para ti si. Buscas una bicicleta de trail polivalente con mejoras en los componentes más importantes, pero que no te deje la cuenta corriente a cero. Quieres mejorar tu técnica en los senderos y necesitas una bicicleta con una geometría que te inspire confianza.",
        image: require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    },
    {
        id: '2',
        name: "Bicicleta de Montaña Trek Marlin 7 Gen 2",
        price: "$2.990.000",
        strikethroughPrice: "$3.890.000",
        storeLogo: require('../assets/images/StoresLogo/fox.png'),
        description: "Es ideal para ti si. Buscas una bicicleta de trail polivalente con mejoras en los componentes más importantes, pero que no te deje la cuenta corriente a cero. Quieres mejorar tu técnica en los senderos y necesitas una bicicleta con una geometría que te inspire confianza.",
        image: require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    },
    {
        id: '3',
        name: "Bicicleta de Montaña Trek Marlin 7 Gen 2",
        price: "$2.990.000",
        strikethroughPrice: "$3.890.000",
        storeLogo: require('../assets/images/StoresLogo/fox.png'),
        description: "Es ideal para ti si. Buscas una bicicleta de trail polivalente con mejoras en los componentes más importantes, pero que no te deje la cuenta corriente a cero. Quieres mejorar tu técnica en los senderos y necesitas una bicicleta con una geometría que te inspire confianza.",
        image: require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    },
    {
        id: '4',
        name: "Bicicleta de Montaña Trek Marlin 7 Gen 2",
        price: "$2.990.000",
        strikethroughPrice: "$3.890.000",
        storeLogo: require('../assets/images/StoresLogo/fox.png'),
        description: "Es ideal para ti si. Buscas una bicicleta de trail polivalente con mejoras en los componentes más importantes, pero que no te deje la cuenta corriente a cero. Quieres mejorar tu técnica en los senderos y necesitas una bicicleta con una geometría que te inspire confianza.",
        image: require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    },
    {
        id: '5',
        name: "Bicicleta de Montaña Trek Marlin 7 Gen 2",
        price: "$2.990.000",
        strikethroughPrice: "$3.890.000",
        storeLogo: require('../assets/images/StoresLogo/fox.png'),
        description: "Es ideal para ti si. Buscas una bicicleta de trail polivalente con mejoras en los componentes más importantes, pero que no te deje la cuenta corriente a cero. Quieres mejorar tu técnica en los senderos y necesitas una bicicleta con una geometría que te inspire confianza.",
        image: require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    },
]


export default function OffertList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <OffertTouchable product={item} />
                )}
                keyExtractor={item => item.id}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
})

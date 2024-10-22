import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


const { width: screenWidth } = Dimensions.get('window');


const images = [
    require('../assets/images/carrusel bicicleta/marlin7-6.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-7.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-8.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-9.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-1.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-2.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-3.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-4.webp'),
    require('../assets/images/carrusel bicicleta/marlin7-5.webp'),
];


const ImageCarousel = () => {
    return (
        <View style={styles.carouselContainer}>
            <Swiper
                style={styles.wrapper}
                autoplay
                autoplayTimeout={4}
                showsPagination={true}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                {images.map((image, index) => (
                    <View style={styles.slide} key={index}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};


const styles = StyleSheet.create({
    carouselContainer: {
        width: screenWidth,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {},
    slide: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '95%',
        height: '100%',
    },
    dot: {
        backgroundColor: 'gray',
        width: 4,
        height: 4,
        borderRadius: 2,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: 'black',
        width: 5,
        height: 5,
        borderRadius: 3,
        marginHorizontal: 3,
    },
});


export default ImageCarousel;

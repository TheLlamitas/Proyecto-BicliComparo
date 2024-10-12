import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    require('../assets/images/carrusel 1.jpg'),
    require('../assets/images/carrusel 2.jpeg'),
    require('../assets/images/carrusel 3.jpg'),
];

const ImageCarousel = () => {
    return (
        <View style={styles.carouselContainer}>
            <Swiper
                style={styles.wrapper}
                autoplay
                autoplayTimeout={4}
                showsPagination={false}
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
        height: 332, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
    },
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
});

export default ImageCarousel;

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


const { width: screenWidth } = Dimensions.get('window');


const ImageCarousel = ({ gallery }) => {
    const galleryUrls = Array.isArray(gallery) 
        ? gallery 
        : Object.values(gallery);

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

            {galleryUrls && galleryUrls.map((url, index) => (
                <View style={styles.slide} key={index}>
                    <Image source={{ uri: url }} style={styles.image} />
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

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const menuOptions = [
    { name: 'Configuración', icon: 'settings', library: 'MaterialIcons' },
    { name: 'Historial de Búsqueda', icon: 'book-open', library: 'FontAwesome5' },
    { name: 'Soporte y Ayuda', icon: 'headset', library: 'MaterialIcons' },
    { name: 'Términos y Condiciones', icon: 'check-box', library: 'MaterialIcons' },
    { name: 'Acerca de la App', icon: 'info', library: 'MaterialIcons' },
];

const socialImage = [
    { name: 'Instagram', image: require('../assets/images/instagram.jpeg') },
    { name: 'Facebook', image: require('../assets/images/facebook.png') },
    { name: 'X', image: require('../assets/images/x.png') },
];

const MenuMas = () => {
    return (
        <View style={styles.container}>
            {menuOptions.map((option, index) => (
                <TouchableOpacity key={index} style={styles.optionButton}>
                    {option.library === 'MaterialIcons' ? (
                        <MaterialIcons name={option.icon} size={24} color='white' style={styles.icon} />
                    ) : (
                        <FontAwesome5 name={option.icon} size={24} color='white' style={styles.icon} />
                    )}
                    <Text style={styles.optionText}>{option.name}</Text>
                </TouchableOpacity>
            ))}

            <View style={styles.socialContainer}>
                {socialImage.map((social, index) => (
                    <TouchableOpacity key={index} style={styles.socialButton}>
                        <Image
                            source={social.image}
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '100%', 
    },
    icon: {
        marginRight: 15,
    },
    optionText: {
        fontSize: 16,
        color: 'white',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100, 
    },
    socialButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: 'black',
        borderRadius: 40, 
    },
    socialIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 40,
    },
});

export default MenuMas;

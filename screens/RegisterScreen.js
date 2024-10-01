import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" /> 
            </TouchableOpacity>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.text}>Registrate para continuar</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Inicio')}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>¿Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButton}>Inicia Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    backButton: {
        position: 'absolute',
        top: 40,  
        left: 20,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginBottom: 40,
    },
    loginButton: {
        backgroundColor: '#8B0000', 
        padding: 15,
        borderRadius: 5,
        width: '100%', 
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    registerText: {
        color: 'white',
        fontSize: 16,
    },
    registerButton: {
        color: '#8B0000', 
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

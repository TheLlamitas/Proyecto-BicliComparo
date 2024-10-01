import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';  

export default function LoginScreen() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" /> 
            </TouchableOpacity>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.text}>Inicia sesión para continuar</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Inicio')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButton}>Regístrate</Text>
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
        padding: 20,
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

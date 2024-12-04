import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { register } from '../utils/auth'; 

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Por favor completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        try {
            const token = await register(email, password);
            if (token) {
                Alert.alert('Éxito', 'Registro completado.');
                navigation.replace('Login'); 
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo completar el registro. Inténtalo de nuevo.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.text}>Regístrate para continuar</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#ccc"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#ccc"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>¿Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerButtonText}>Inicia Sesión</Text>
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
        paddingHorizontal: 20,
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
    input: {
        borderWidth: 1,
        borderColor: '#8B0000',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        color: 'white',
    },
    registerButton: {
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
    registerButtonText: {
        color: '#8B0000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

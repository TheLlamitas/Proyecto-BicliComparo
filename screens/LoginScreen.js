import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Pressable, Platform, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/auth-context";
import { login } from "../utils/auth";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
    const navigation = useNavigation(); 
    const authCtx = useContext(AuthContext);

    const [email, setEmail] =  useState('') ;
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    async function handleLogin() {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email an password', [{ text: Ok }]);
            return;
        }
        try {
            const token = await login(email, password);
            authCtx.login(token, email);
            navigation.navigate('Home');
        } catch (error) {
            setError("Error en el inicio de sesión. Verifica tus credenciales.");
            console.error("Error en el inicio de sesión: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" /> 
            </TouchableOpacity>
            <TextInput
            placeholder="Correo Electronico"
            placeholderTextColor='white'
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput
            placeholder="Contraseña"
            placeholderTextColor='white'
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={handleLogin}  // cuando se oprime el boton se llama a la funcion handleLogin
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
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
      padding: 16,
      backgroundColor: 'black',
    },
    backButton: {
        position: 'absolute',
        top: 40,  
        left: 20,
    },
    input: {
      height: 40,
      color: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
      },
    registerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    registerText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
    },
    registerButton: {
        color: '#8B0000', 
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
      },
      buttonPressed: {
        backgroundColor: 'blue',
      },
      iosButton: {
        borderRadius: 25,
      },
      androidButton: {
        borderRadius: 0,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });
  
  
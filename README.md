# Proyecto-BicliComparo
Proyecto que se esta realizando para Desarrollo Movil

Para ejecutarlo descargar las dependencias

    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/stack
    npm install @react-navigation/drawer
    npm install @react-navigation/bottom-tabs
    npm install react-native-swiper
    npm install react-native-vector-icons
    npm install react-native-snap-carousel

Configuracion del axios

    import axios from "axios";
    import { Alert } from "react-native";

    const apiKey = 'SU Api Key de firebase';

    async function authenticate(mode, email, password) {

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
        const response = await axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true,
        })

        if (response.status === 200) {
            const token = response.data.idToken;
            return token;
        } else {
            Alert.alert("Login Failed", "Invalid email or password");
        }
    } catch (error) {
        Alert.alert("Login Error", "An error ocurred. Please try again");
        console.error(error);
    }
}

export async function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}


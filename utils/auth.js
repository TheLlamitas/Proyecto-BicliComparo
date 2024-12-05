import axios from "axios";
import { Alert } from "react-native";


const apiKey = '';

async function autenticateregister(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true, 
      });
      if(response.status === 200){
          const token = response.data.idToken;  
              return token; 
      } else {
          Alert.alert("Login Failed", "Invalid email or password.");
      }
    } catch (error) {
      Alert.alert("Login Error", "An error occurred. Please try again.");
      console.log(error);
    } finally {
    }
  }
  
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
export async function register (email, password){
    return autenticateregister(`signUp`, email, password);
  }

import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isLogged: false,
  email: '',
  login: async () => {},
  logout: () => {},
})

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  async function login(token, email) {
    setAuthToken(token);
    setUserEmail(email);
  }

  function logout() {
    setAuthToken(null);
    setUserEmail('');
  }

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    email: userEmail,
    login: login,
    logout: logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
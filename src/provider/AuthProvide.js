import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const login = (email, password) => {
     
    axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.data.access_token);
        console.log(token);
        userLogin();

        //redirigir a Tareas
        // navigate("/tareas");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const userLogin = () => {
    axios.post("http://127.0.0.1:8000/api/auth/me", { token }).then((res) => {
      setUser(res.data.email);
      console.log(user);
    });
  };

  const logout = () => {
    axios
      .post("http://127.0.0.1:8000/api/auth/logout", { token })
      .then((result) => {
        alert(result.data.message);
      });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

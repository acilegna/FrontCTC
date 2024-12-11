import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const login = async (Email, Password) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        email: Email,
        password: Password,
      })
      .then((response) => {
        setToken(response.data.access_token);
        console.log(token);
        navigate("/tareas ");

        if (token) {
          userLogin();
        }
        return;
      })
      .catch((error) => {
        Swal.fire("Datos incorrectos");
      });
  };
  const userLogin = () => {
    axios.post("http://127.0.0.1:8000/api/auth/me", { token }).then((res) => {
      setUser(res.data.email);
      setName(res.data.name);
      console.log(name);
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
    <AuthContext.Provider value={{ user, name, login, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

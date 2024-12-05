import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function LoginComponent() {
  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setTPassword] = useState("");

  const [btnDisable, SetBtnDisable] = useState(true);
  const [token, setToken] = useState("");

  //si no estan vacios habilitar boton , se activa una vez se renderice, para evitar error
  //agregamo sparametro y se renderice tambien una vez haya cambiado valor del campo password EMAIL
  useEffect(() => {
    if (Email != "" && Password != "") {
      SetBtnDisable(false);
    } else SetBtnDisable(true);
  }, [Password, Email]);

  const login = () => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        email: Email,
        password: Password,
      })
      .then((response) => {
        setToken(response.data.access_token);
        console.log(token);
        //redirigir a Tareas
        navigate("/tareas");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) => {
            setTPassword(event.target.value);
          }}
          required
        />
      </div>

      <button className="btn btn-primary" onClick={login} disabled={btnDisable}>
        Like
      </button>
    </div>
  );
}
export default LoginComponent;

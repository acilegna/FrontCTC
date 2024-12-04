import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function LoginComponent() {
  const [Email, setEmail] = useState("");
  const [Password, setTPassword] = useState("");

  const login = () => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        email: Email,
        password: Password,
      })
      .then((response) => {
        const token = response.data.access_token;
        console.log(token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={login}>
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
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
      <button className="btn btn-primary" onClick={login}>
        Like
      </button>
    </div>
  );
}
export default LoginComponent;

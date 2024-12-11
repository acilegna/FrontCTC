import { useState, useEffect } from "react";
import { useAuth } from "../../provider/AuthProvide";

const LoginComponent = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [btnDisable, SetBtnDisable] = useState(true);

  const auth = useAuth();
  useEffect(() => {
    if (Email != "" && Pass != "") {
      SetBtnDisable(false);
    } else SetBtnDisable(true);
  }, [Pass, Email]);

  const SendData = (e) => {
    e.preventDefault();
    auth.login(Email, Pass);
  };

  return (
    <div className="container">
      <form onSubmit={SendData}>
        <div className="mb-3">
          <label className="form-label">Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="example@gmail.com"
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
            name="pass"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => {
              setPass(event.target.value);
            }}
            required
          />
        </div>
        <button className="btn-submit btn btn-primary" disabled={btnDisable}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;

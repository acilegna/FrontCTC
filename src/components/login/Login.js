import { useState, useEffect } from "react";
import { useAuth } from "../../provider/AuthProvide";

const LoginComponent = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [btnDisable, SetBtnDisable] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    if (Email != "" && Password != "") {
      SetBtnDisable(false);
    } else SetBtnDisable(true);
  }, [Password, Email]);

  const SendData = () => {
    if (Email !== "" && Password !== "") {
      auth.login(Email, Password);
     return;
    }
    alert("please provide a valid input");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Email addresssffd</label>
        <input
          type="email"
          name="email"
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
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={SendData}
        disabled={btnDisable}
      >
        Login
      </button>
    </div>
  );
};

export default LoginComponent;

import { useState, useEffect } from "react";
import { useAuth } from "../../provider/AuthProvide";
import { Navigate } from "react-router-dom";
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

  const SendData = ( ) => {
    
    auth.login(Email, Pass);

    // return;
    console.log(Pass);

    //  alert("please provide a valid input");
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
          name="pass"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) => {
            setPass(event.target.value);
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

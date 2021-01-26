import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    //  firebase login stiffs below
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(err => alert(err.message));
  };

  const signUp = e => {
    e.preventDefault();

    //  firebase signup functions
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="loginWrapper">
      <div className="login">
        <Link to="/">
          <img
            src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
            alt=""
            className="login__logo"
          />
        </Link>
        <div className="login__content">
          <h3>SignIn</h3>
          <form action="">
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" onClick={signIn} className="login__signIn">
              SignIn
            </button>
          </form>
          <h5 className="login__alert">
            This is fake clone and for educational pospose we do not promote
            comercialism here !{" "}
          </h5>

          <button onClick={signUp} className="login__signUp">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

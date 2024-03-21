import { useNavigate } from "react-router-dom";

import "./login.css";
import background from "./imgs/cat.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faUser, faLock);

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (
      username.value === registeredUsername &&
      password.value === registeredPassword
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Username or Password is Incorrect");
    }
  };

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <div className="login-page">
      <div className="img">
        <img src={background} />
      </div>
      <div className="login-container">
        <div className="title">
          <h2>LOG IN</h2>
        </div>
        <form className="login-form" onSubmit={(e) => loginHandler(e)}>
          <div className="form-field">
            <FontAwesomeIcon icon=" fa-solid fa-user" className="icon" />
            <input id="username" required type="text" />
            <label for="">Username</label>
          </div>
          <div className="form-field">
            <FontAwesomeIcon icon=" fa-solid fa-lock" className="icon" />
            <input id="password" required type="password" />
            <label for="">Password</label>
          </div>
          <div className="login-button">
            <input type="submit" value="Log In" />
          </div>

          <div className="links">
            <a onClick={registerHandler}>Register here</a>
            <a onClick={registerHandler}> Forgot Password? </a>
          </div>
        </form>
      </div>
    </div>
  );
}

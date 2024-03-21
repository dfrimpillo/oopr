import { useNavigate } from "react-router-dom";
import background from "./imgs/cat.png";

import "./register.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faUser, faLock);
export default function Login() {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    if (password.value === confirmation.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);

      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  };

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="img">
        <img src={background} />
      </div>
      <div className="register-container">
        <div className="title">
          <h2>Register</h2>
        </div>
        <form className="register-form" onSubmit={(e) => registerHandler(e)}>
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
          <div className="form-field">
            <FontAwesomeIcon icon=" fa-solid fa-lock" className="icon" />
            <input id="confirmation" required type="password" />
            <label for="">Confirm Password</label>
          </div>
          <div className="login-button">
            <input type="submit" value="Register" />
          </div>

          <div className="links">
            <a onClick={loginHandler}>Already have an account? Login here.</a>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

import "./header.css";
import logo from "./imgs/logo.png";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const homeHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <img src={logo} alt="logo" />
      </div>
      <div className="middle-nav">
        <a onClick={homeHandler} className="middle-nav-items">
          Home
        </a>
        <a href="" className="middle-nav-items">
          Shop
        </a>
        <a href="" className="middle-nav-items">
          About
        </a>
      </div>
      {isLoggedIn === "true" ? (
        <div className="logout_button">
          <a onClick={logoutHandler}>Logout</a>
        </div>
      ) : (
        <div className="login_button">
          <a onClick={loginHandler}>Login</a>
        </div>
      )}
    </nav>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-div">
          <img
            src="https://img.freepik.com/free-photo/cool-looking-3d-gold-lion-head-with-long-mane_23-2150800677.jpg?t=st=1709976011~exp=1709979611~hmac=53dd867558e26de4a7896292e22db7ab0b9ea1fc0818ac9f0ed2a8c35831622d&w=740"
            alt=""
          />
        </div>
        <div className="menu-div">
          <ul
            className="menu-item"
            style={{ display: "flex", listStyleType: "none" }}
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Our Dishes</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="login-signup-div">
          <button>LogIn</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

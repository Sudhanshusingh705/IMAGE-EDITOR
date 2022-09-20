import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              
              <a href="/" className="navbar-brand mt-2 mt-lg-0">
                <img
                  src="https://editzstock.com/wp-content/uploads/2022/05/Phoro-editing-logo-2-1024x1024.png"
                  height={75}
                  alt="REACT Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                      HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                      LOGIN
                    </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                      REGISTER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/imageeditor">
                      IMAGE-EDITOR
                  </NavLink>
                </li>
                </ul>
            </div>
          </div>

        </nav>
    </div>
  );
};

export default Header;

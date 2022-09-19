import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
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
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
              <NavLink to="/" className="navbar-brand mt-2 mt-lg-0">
                <img
                  src="https://editzstock.com/wp-content/uploads/2022/05/Phoro-editing-logo-2-1024x1024.png"
                  height={75}
                  alt="REACT Logo"
                  loading="lazy"
                />
              </NavLink>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    <a href="#" class="text-dark">
                      HOME
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <a href="#" class="text-dark">
                      LOGIN
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    <a href="#" class="text-dark">
                      REGISTER
                    </a>
                  </NavLink>
                </li>
                <NavLink className="nav-link" to="/imageeditor">
                  <a href="#" class="text-dark">
                    IMAGE-EDITOR
                  </a>
                </NavLink>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}

            {/* Icon */}
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
            {/* Notifications */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
            </div>
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li></li>
              </ul>
            </div>
          </div>
          {/* Right elements */}

          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  );
};

export default Header;

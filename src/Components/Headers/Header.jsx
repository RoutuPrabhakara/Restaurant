import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="navdata">
      <nav className="navbar navbar-expand-lg bg-light border-2 p-2">
      <div className="container-fluid">
        
        {/* Navbar Brand */}
        <a className="navbar-brand text-dark " href="/">
          Navbar
        </a>

        {/* Navbar Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto  text-success">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href='/Menu'>Menu</a>
            <a className="nav-link" href="/Reservation">Reservation</a>
            <a className="nav-link" href="/Cart">Cart</a>
            <a className="nav-link" href="/Feedback">Feedback Reviews</a>

            {/* Admin Dashboard Dropdown */}
            <div className="dropdown text-success">
              <button
                className="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin Dashboard
              </button>
              <ul className="dropdown-menu text-success">
                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                <li><a className="dropdown-item" href="/Menu">Menu Management</a></li>
                <li><a className="dropdown-item" href="/Cart">Orders</a></li>
                <li><a className="dropdown-item" href="#">Reservations</a></li>
              </ul>
            </div>

            {/* Kitchen Display System Dropdown */}
            <div className="dropdown text-success">
              <button
                className="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kitchen Display System
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">New Orders</a></li>
                <li><a className="dropdown-item" href="#">Completed Orders</a></li>
                <li><a className="dropdown-item" href="#">Analytics</a></li>
                <li><a className="dropdown-item" href="#">Notifications</a></li>
              </ul>
            </div>

            {/* Profile Login Button */}
            <a className="btn   text-center pb-1 " style={{height:"40px",padding:"5px",color:'black',paddingBottom:"5px"}} href="#">Profile Login</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;

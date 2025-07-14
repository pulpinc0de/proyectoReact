import React from 'react'
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand carattere-regular" href="#">Ares Cakes</a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#form">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

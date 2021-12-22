import React from "react";
import HamburgerIcon from './assets/hamburger.svg';

import './styles.css';
// import NavOverlay from './script.js';

export function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
export function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

export default function MyNav() {
  return (
    <>
        <nav>
            {/* The overlay */}
            <div id="myNav" className="overlay">
                {/* Button to close the overlay navigation */}
                <a href="#" className="closebtn" onClick={ closeNav }>
                    X
                </a>
                {/* Overlay content */}
                <div className="overlay-content">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="navbar-container">
                <span className="align-middle">Bret Petersen</span>
                {/* Use any element to open/show the overlay navigation menu */}
                <span onClick={ openNav }>
                    {/* <HamburgerIcon width="40px" height="40px" /> */}
                    X
                </span>
            </div>
        </nav>
    </>
  );
}
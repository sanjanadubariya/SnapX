// Navbar.jsx
import React from 'react';
import './Navbar.css';
import Contact from './Contact';

const Navbar = () => {

    return (
        <nav className="navbar">
        <div className="logo">
            <h3>Snap X</h3>
        </div>
        <div className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#work">Work</a>
            <a href="#skills">My Skills</a>
            <a href="#contact">Contact me</a>
        </div>
        <button className="call-btn" onClick={() => window.location.href = '#contact'}>
        Schedule a call</button>
        </nav>
    );
};

export default Navbar;
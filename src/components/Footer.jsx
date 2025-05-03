// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
            <h3>Snap X</h3>
            <p>CAPTURING THE MOMENTS</p>
            </div>
            
            <div className="footer-links">
            {/* <div className="link-column">
                <h4>Navigation</h4>
                <a href="#portfolio">Portfolio</a>
                <a href="#work">Work</a>
                <a href="#client-reviews">Client Reviews</a>
                <a href="#contact">Contact</a>
            </div> */}
{/*             
            <div className="link-column">
                <h4>Services</h4>
                <a href="#wedding">Wedding Videos</a>
                <a href="#commercial">Commercial Films</a>
                <a href="#documentary">Documentary</a>
                <a href="#corporate">Corporate Videos</a>
            </div> */}
            
            <div className="link-column">
                <h4>Connect</h4>
                <a href="https://www.instagram.com/g_a_u_r_a_vv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                {/* <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a> */}
                {/* <a href="mailto:contact@snapx.com">Email</a> */}
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Snap X. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
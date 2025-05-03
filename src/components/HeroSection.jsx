// HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import videographerImage from '../assets/videographer.png'; // Add an image to your assets folder

const HeroSection = () => {
    return (
        <>
        <div class="gold-border"></div>
        <div className="hero-content">
            <div className="hero-image">
            <img src={videographerImage} alt="Videographer" />
            <div className="profession">
                <span>Pro</span>
                <span>videographer</span>
            </div>
            </div>
            <div className="hero-text">
            <p className="greeting">Hello there, Nice to meet you. I am</p>
            <h1  className="timeline">Gaurav Sonawane</h1>
            <p className="bio">
                Professional videographer with expertise in cinematic storytelling and visual narratives.
                Creating compelling stories through the lens, capturing life's beautiful moments.
                Specializing in wedding films, documentaries, and commercial video production.
            </p>
            <p className="tagline">Let's take your videos to next level</p>
            </div>
        </div>
    </>
    );
};

export default HeroSection;
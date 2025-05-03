import React from 'react'
import img from '../assets/camera.png'
import './Skills.css'
const Skills = () => {
    return (
        <section id="skills">
            <div class="gold-border"></div>
            <h2>My Skills</h2>
            <div className="timeline"></div>
            <div className="skills-container">
                <div className="skill-item">
                    <img src={img} alt="" width={49}/>
                    <h3>Photography</h3>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.prod.website-files.com/5fa15cd1fcb0499dd11ff9b1/5fa3cf99f4bea968b0405cf7_Video%20Film.svg" alt="" />
                    <h3>Video Filming</h3>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.prod.website-files.com/5fa15cd1fcb0499dd11ff9b1/5fa3cf99d464fe2c7231c4a1_Speaker.svg" alt="" />
                    <h3>Creative Concept</h3>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.prod.website-files.com/5fa15cd1fcb0499dd11ff9b1/5fa3cf99d68450a387ee54d7_Player.svg" alt="" />
                    <h3>Video Editing</h3>

                </div>
            </div>
        </section>
    )
}

export default Skills

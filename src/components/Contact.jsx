import React from 'react'
import './Contact.css'
// import {img} from './dist/assets/videographer-BEhneEnW.png'
const Contact = () => {
    return (
        <section id="contact">
            <div class="gold-border"></div>
            <h2>Contact Me</h2>
            <div className="timeline"></div>
            <div className="contact">
            <div className="about_me">
                <h3>Gaurav Sonewane</h3>
                <img src="dist/assets/videographer-BEhneEnW.png" alt="" width="150rem" border="12rem"/>
                    <ul>+91 86524 31882</ul>
                    <ul></ul>
                    <ul>Mumbai, Maharastra</ul> 
            </div>
            <form action="" method="POST" border="0">

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />

                <label htmlFor="phone">Phone:</label>
                <input type="phone" name="phone" required/>
                <br />

                <button type="submit">Lets Talk</button>
                <div className="timeline"></div>
            </form>
            </div>
        </section>
    )
}

export default Contact

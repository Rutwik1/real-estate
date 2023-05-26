import React from 'react';
import './ContactSection.css';
import images from '../images';

const ContactSection = () => {

    return (
        <>
            <section id="contactsection" className='contactsection'>
                <h2 className="head-text">Take a coffee & chat with me</h2>

                <div className="app-cards_container">
                    <div className="app-card ">
                        <img src={images.email} alt="email" />
                        <a href="mailto:hello@rutwikk.com" className="p-text">hello@rutwikk.com</a>
                    </div>
                    <div className="app-card">
                        <img src={images.mobile} alt="phone" />
                        <a href="tel:+91 8668311382" className="p-text">+91 8668311382</a>
                    </div>
                </div>

                <div className="app__footer-form app__flex">

                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="username" />
                    </div>

                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" />
                    </div>

                    <div>
                        <textarea className="p-text" placeholder="Your Message" name="message" />
                    </div>

                    <button type="button" className="p-text">Send Message</button>

                </div>
            </section>


        </>


    )
}

export default ContactSection;
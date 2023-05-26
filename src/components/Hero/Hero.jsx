import React from 'react';
import './Hero.css';
import { Link } from "react-scroll";


const Hero = () => {
    return (
        <>
            <section className="hero" style={{ backgroundImage: "url('https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-dlf-india-nri-campaign-updated-1.jpg')" }}>
                <div className="hero-content">
                    <h1>Welcome to Amazing Real Estate</h1>
                    <p>Find your dream home with us!</p>
                    <Link to="contactsection" smooth activeClass="active" spy>
                        <button>Contact Us</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero;
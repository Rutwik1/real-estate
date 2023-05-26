import React from 'react';
import './Testimonial.css';
import { testimonials } from '../data';



const Testimonial = () => {
    return (
        <>
            <section className="testimonials">
                <div className="testimonial-container">
                    <h2 className="testimonial-heading">Testimonials</h2>
                    <div className='test-wrap'>
                        {testimonials.map((testimonial) => (
                            <div className="testimonial" key={testimonial.id}>
                                <div className='wrapper'>
                                    <div className="testimonial-profile">
                                        <img src={testimonial.profile} alt="Profile" />
                                    </div>

                                    <div className="testimonial-content">

                                        <div className="testimonial-details">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.city}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-description">
                                    <p >{testimonial.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;
import React from 'react';
import './Listings.css';
import { listingsData } from '../data';
import { FaRegHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';


const Listings = () => {
    return (
        <>
            <section id='listings' className="listings">
                <div className='listing-heading'>
                    <h2>Featured Listings</h2>
                </div>
                <div className='listing-container'>
                    {listingsData.map((listing) => (
                        <div key={listing.id} className="listing-item">
                            <img src={listing.cover} alt={listing.title} />
                            <div className='category'>
                                <h5 style={{ background: listing.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: listing.category === "For Sale" ? "#25b579" : "#ff9800" }}>{listing.category}</h5>
                                <span className='heart-icon'><FaRegHeart className="heart-inside" /></span>
                            </div>
                            <div className='list-content'>
                                <h3>{listing.name}</h3>
                                <div className='location-flex'>
                                    <span className='location-icon'><MdLocationOn /></span>
                                    <p className='location'>{listing.location}</p>
                                </div>
                                <p className='bhk'>{listing.bhk} bhk, {listing.baths} baths</p>
                            </div>
                            <div className='listing-price'>
                                <p>{listing.price}</p>
                                <div className='listing-btn'>
                                    <button>Get In Touch</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Listings;

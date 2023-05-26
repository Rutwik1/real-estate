import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './FilteredResults.css';



const FilteredResults = ({ filteredListings }) => {
    return (
        <>
            <section className="listingss">
                <div className='listing-containerr'>


                    {filteredListings.length > 0 && (
                        <div className="listing-containery">
                            {filteredListings.map((listing) => (
                                <div key={listing.id} className="listing-itemm">
                                    <img src={listing.cover} alt={listing.title} />
                                    <div className='categoryy'>
                                        <h5 style={{ background: listing.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: listing.category === "For Sale" ? "#25b579" : "#ff9800" }}>{listing.category}</h5>
                                        <span className='heart-iconn'><FaRegHeart className="heart-insidee" /></span>
                                    </div>
                                    <div className='list-contentt'>
                                        <h3>{listing.name}</h3>
                                        <div className='location-flexx'>
                                            <span className='location-iconn'><MdLocationOn /></span>
                                            <p className='locationn'>{listing.location}</p>
                                        </div>
                                        <p className='bhkk'>{listing.bhk} bhk, {listing.baths} baths</p>
                                    </div>
                                    <div className='listing-pricee'>
                                        <p>{listing.price}</p>
                                        <div className='listing-btnn'>
                                            <button>Get In Touch</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </>
    );
};

export default FilteredResults;

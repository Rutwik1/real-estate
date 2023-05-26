import React, { useState } from 'react';
import './SearchForm.css';
import { listingsData } from '../data';
import FilteredResults from './FilteredResults';


function SearchForm() {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [bhk, setBhk] = useState('');
  const [baths, setBaths] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = listingsData.filter((listing) => {
      const isLocationMatch =
        location === '' || listing.location.toLowerCase().includes(location.toLowerCase());
      const isBhkMatch = bhk === '' || listing.bhk.toString() === bhk.toString();
      const isPriceMatch = price === '' || listing.price.toString() === price.toString();
      const isBathsMatch = baths === '' || listing.baths.toString() === baths.toString();

      return isLocationMatch && isBhkMatch && isPriceMatch && isBathsMatch;
    });

    setFilteredListings(filtered);
  };

  return (
    <>

      <form className="search-container" onSubmit={handleSearch}>
        <input
          className="input-field"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="BHK"
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Baths"
          value={baths}
          onChange={(e) => setBaths(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>



      {filteredListings.length > 0 && (
        <div className="filtered-results-container">
          <FilteredResults filteredListings={filteredListings} />
        </div>
      )}

    </>
  );
}

export default SearchForm;

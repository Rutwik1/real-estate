import React from 'react';
import './Search.css';
import SearchForm from './SearchForm';

const Search = () => {
    return (
        <>
            <section className="search">
                <div className='search-container'>
                    <div className='search-cover'>
                        <SearchForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search;
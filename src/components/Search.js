import React from 'react'

function Search({search, setSearch}) {
    return (
        <div className='search'>
            <input className="search-bar" value={search} type="text" placeholder="Search Jokes" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search;

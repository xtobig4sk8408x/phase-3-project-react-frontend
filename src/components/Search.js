import React from 'react'

function Search({search, setSearch}) {
    return (
        <div className='search large fluid icon input'>
            <input value={search} type="text" placeholder="Search Jokes" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search;

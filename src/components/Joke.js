import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function Joke({singleJoke}) {
    const location = useLocation();
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        if (!singleJoke) {
        fetch (API)
        .then(res => res.json())
        .then(jokeObj => setJoke(jokeObj))
        .catch(err => alert(err))
        }
    }, [singleJoke, id])

    return (
        <div className='' id={finalJoke.id}>
            <li>
                <img />
                <h4></h4>
                <span className='card-detail'>Joke: {}</span> <br />
                <span className='card-detail'>Comment: {}</span> <br />
                <span className='card-detail'>Rating: {}</span> <br />
                {/* <span></span>
                <span></span>
                <span></span> */}
            </li>
        </div>
    )
}

export default Joke;
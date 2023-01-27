import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Comment from './Comment'

function Joke({singleJoke, API}) {
    const location = useLocation();
    const [joke, setJoke] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        if (!singleJoke) {
        fetch (API + `/jokes/${id}`)
        .then(res => res.json())
        .then(jokeObj => setJoke(jokeObj))
        .catch(err => alert(err))
        }
    }, [singleJoke, id])
    const finalJoke = !joke ? singleJoke : joke
    if (!finalJoke) return <div>Loading...</div>
    return (
        <div className='' id={finalJoke.id}>
            <li>
                <img />
                <h4></h4>
                <span className='card-detail'>Joke: {finalJoke.joke}</span> <br />
                {location.pathname === "/" ? null : (
                    <>
                    {finalJoke.comments.map(comment => <Comment comment = {comment}/>)}

                    
                    </>
                )}
                {/* <span className='card-detail'>Comment: {}</span> <br />
                <span className='card-detail'>Rating: {}</span> <br /> */}
                {/* <span></span>
                <span></span>
                <span></span> */}
            </li>
        </div>
    )
}

export default Joke;
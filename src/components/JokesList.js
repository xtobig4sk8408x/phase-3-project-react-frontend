import React from 'react';
import Joke from './Joke';

function JokesList({jokes}) {

    const jokesList = jokes.map(singleJoke => 
        <Joke singleJoke={singleJoke} key={singleJoke.id} />)

    return (
        <div className="JokesList">
            <ul className="Jokes">
                {jokesList}
            </ul>
        </div>
    )
}

export default JokesList;
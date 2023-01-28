import React from 'react';
import Joke from './Joke';

function JokesList({jokes, API, handleTrash}) {

    const jokesList = jokes.map(singleJoke => 
        <Joke singleJoke={singleJoke} key={singleJoke.id} API={API} handleTrash={handleTrash}/>)

    return (
        <div className="JokesList">
            <ul className="Jokes">
                {jokesList}
            </ul>
        </div>
    )
}

export default JokesList;
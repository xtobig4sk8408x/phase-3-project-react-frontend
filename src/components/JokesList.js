import React from 'react';
import Joke from './Joke';

function JokesList({jokes, API, handleTrash, search}) {

    // const filteredJokes= jokes.filter(joke1 => (
    //     joke1.comment.toLowerCase().includes(search.toLowerCase()) || 
    //     joke1.rating.toLowerCase().includes(search.toLowerCase()) ||
    //     joke1.joke.toLowerCase().includes(search.toLowerCase())
    //     ))

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
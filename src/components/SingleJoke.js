import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link, useHistory } from 'react-router-dom';
import Comment from './Comment'

function SingleJoke({jokes, API, handleTrash, setJokes}) {
    const location = useLocation();
    const {id} = useParams()
    // const singleJoke = jokes.find((joke) => joke.id == id)
    const [newJoke, setNewJoke] = useState("")
    const [joke, setJoke] = useState({})
    // const [newForm, setNewForm] = useState({
    //     comment: "",
    //     rating: ""
    // })
    const [rating, setRating] = useState()
    const [comment, setComment] = useState("")
    // console.log(singleJoke)

    // const handleChange = (e) => {
    //     setNewForm({...newForm, [e.target.name]: e.target.value})
    // }

    // const handleTrash = (someName) => {
    //     fetch(`${API}/jokes/${someName.id}`, {
    //       method: "DELETE"
    //     })
    //     const newJoke = jokes.filter(joke => joke.id !== someName.id) // ? listing : null)
    //     setJokes(newJoke)
    //   }

    const handleDelete = () => {
        handleTrash(joke)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/jokes/:id/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: rating,
          comment: comment
        }),
      });
    };
      
        // function handlePatchSubmit(e) {

        
        //   e.preventDefault();
        //   fetch(`http://localhost:9393/jokes/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       joke: joke
        //     }),
        //   })
        //     .then((r) => r.json())
        //     .then((updatedJoke) => setJokes(updatedJoke));
        // }

    const editJoke = (id, newJoke) => {
        fetch(`${API}/jokes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                joke: newJoke
            }),
        })
            // .then((r) => r.json())
            // .then((updatedJoke) => setJoke(updatedJoke));
    };

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        editJoke(id, newJoke)
    }

    useEffect(() => {
        fetch (API + `/jokes/${id}`)
        .then(res => res.json())
        .then(jokeObj => {
            setJoke(jokeObj);
        })
        .catch(err => alert(err))
    }, []);
    // const joke = !joke ? joke : joke
    if (!joke.id) return <div>Loading...</div>
    
    //console.log(joke, singleJoke )
    return (
        <div className=''>
            <li>
                <img />
                <h4></h4>
                <span className='card-detail'>Joke: {joke && joke.joke}</span> <br />
                {location.pathname === "/" ? null : (
                    <>
                    {/* {finalJoke.comments.map(comment => <Comment comment = {comment} />)} */}

                    
                    </>
                )}
                    {/* <button>View Joke</button> */}
                <form onSubmit={handleSubmit} >
                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" name="comment" placeholder="Comment" /> <br />
                <input value={rating} onChange={(e) => setRating(e.target.value)} type="integer" name="rating" placeholder="Rating" /> <br />
                <button>Add Comment and Rating</button>
                </form>
                <form onSubmit={handleFormSubmit} >
                <input value={newJoke} onChange={(e) => setNewJoke(e.target.value)} type="text" name="new joke" placeholder="New Joke" /> <br />
                <button>Edit Joke</button>
                </form>
                <button onClick={handleDelete} className="delete joke">Delete 🗑</button>
            </li>
        </div>
    )
}

export default SingleJoke;
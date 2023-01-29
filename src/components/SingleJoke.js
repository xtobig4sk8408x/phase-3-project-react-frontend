import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Comment from './Comment'

function SingleJoke({singleJoke, API, handleTrash, setJokes}) {
    const location = useLocation();
    const {id} = useParams()
    const [newJoke, setNewJoke] = useState(singleJoke)
    const [joke, setJoke] = useState("")
    // const [newForm, setNewForm] = useState({
    //     comment: "",
    //     rating: ""
    // })
    const [rating, setRating] = useState()
    const [comment, setComment] = useState("")
    const [updatedJoke, setUpdatedJoke] = useState("")

    // const handleChange = (e) => {
    //     setNewForm({...newForm, [e.target.name]: e.target.value})
    // }

    const handleDelete = () => {
        handleTrash(singleJoke)
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
            .then((r) => r.json())
            .then((updatedJoke) => setNewJoke(updatedJoke));
    };

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        editJoke(id, newJoke)
    }

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
        <div className=''>
            <li>
                <img />
                <h4></h4>
                <span className='card-detail'>Joke: {finalJoke.joke}</span> <br />
                {location.pathname === "/" ? null : (
                    <>
                    {finalJoke.comments.map(comment => <Comment comment = {comment} />)}

                    
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
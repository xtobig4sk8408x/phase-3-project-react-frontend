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

    const [ratings, setRatings] = useState([])
    const [updatedJoke, setUpdatedJoke] = useState("")
    const [comments, setComments] = useState([])

    const handleClick = () => {
        setComments((comments) => [...comments, comment])
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    };

    const handleRatingClick = () => {
        setRatings((ratings) => [...ratings, rating])
    };
    const onChangeRatingHandler = (e) => {
        setRating(e.target.value)
    };

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
        fetch(`${API}/jokes/${joke.id}/comments`, {
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
            <div className="main-container">
            {comments.map((text) => (
                <div className="comment-container">{text}</div>
            ))}
            <div className="comment-flexbox">
                <h3 className="comment-text">Comments</h3>
                <textarea value={comment} onChange={onChangeHandler} className="input-box" />
                <button onClick={handleClick} className="comment-button">Submit</button> 
            </div>

            <div className="main-container-rating">
            {ratings.map((number) => (
                <div className="rating-container">{number}</div>
            ))}
            <div className="rating-flexbox">
                <h3 className="rating-text">Rating</h3>
                <textarea value={rating} onChange={onChangeRatingHandler} className="input-box-rating" />
                <button onClick={handleRatingClick} className="rating-button">Submit</button> 
            </div>
        </div>

        </div>
                <h4></h4>
                <span className='card-detail'>Joke: {joke && joke.joke}</span> <br />
                {location.pathname === "/" ? null : (
                    <>
                    {/* {finalJoke.comments.map(comment => <Comment comment = {comment} />)} */}

                    
                    </>
                )}
                    {/* <button>View Joke</button> */}
                <form onSubmit={handleSubmit} >
                {/* <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" name="comment" placeholder="Comment" /> <br /> */}
                {/* <input value={rating} onChange={(e) => setRating(e.target.value)} type="integer" name="rating" placeholder="Rating" /> <br /> */}
                {/* <button>Add Comment and Rating</button> */}
                </form>
                <form onSubmit={handleFormSubmit} >
                <input className="edit-joke-form" value={newJoke} onChange={(e) => setNewJoke(e.target.value)} type="text" name="new joke" placeholder="Enter New Joke" /> <br />
                <button className="edit-joke-button">Edit Joke</button>
                </form>
                <button onClick={handleDelete} className="delete-joke-button">Delete ????</button>
        </div>
    )
}

export default SingleJoke;
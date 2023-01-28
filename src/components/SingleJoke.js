import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Comment from './Comment'

function SingleJoke({singleJoke, API, handleTrash}) {
    const location = useLocation();
    const {id} = useParams()
    const [joke, setJoke] = useState(null)
    // const [newForm, setNewForm] = useState({
    //     comment: "",
    //     rating: ""
    // })
    const [rating, setRating] = useState()
    const [comment, setComment] = useState("")

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
                <Link to={`/jokes/${finalJoke.id}`}>
                <h4></h4>
                <span className='card-detail'>Joke: {finalJoke.joke}</span> <br />
                {location.pathname === "/" ? null : (
                    <>
                    {finalJoke.comments.map(comment => <Comment comment = {comment}/>)}

                    
                    </>
                )}
                    {/* <button>View Joke</button> */}
                <form onSubmit={handleSubmit} >
                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" name="comment" placeholder="Comment" /> <br />
                <input value={rating} onChange={(e) => setRating(e.target.value)} type="integer" name="rating" placeholder="Rating" /> <br />
                <button>Add Comment</button>
                </form>
                <button onClick={handleDelete} className="delete joke">Delete 🗑</button>
                </Link>
            </li>
        </div>
    )
}

export default SingleJoke;
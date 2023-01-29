import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Comment from './Comment'

function Joke({singleJoke, API, handleTrash}) {
    const location = useLocation();
    const {id} = useParams()
    const [joke, setJoke] = useState(null)
    const [newForm, setNewForm] = useState({
        comment: "",
        rating: ""
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

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
          rating: newForm.rating,
          comment: newForm.comment
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
                </Link>
                {location.pathname === "/" ? null : (
                    <>
                    {finalJoke.comments.map(comment => <Comment comment = {comment}/>)}

                    
                    </>
                )}
                    {/* <button>View Joke</button> */}
                {/* <form onSubmit={handleSubmit} >
                <input value={newForm.comment} onChange={handleChange} type="text" name="comment" placeholder="Comment" /> <br />
                <input value={newForm.rating} onChange={handleChange} type="integer" name="rating" placeholder="Rating" /> <br />
                <button>Add Comment</button>
                </form> */}
                {/* <span className='card-detail'>Comment: {}</span> <br />
                <span className='card-detail'>Rating: {}</span> <br /> */}
                {/* <span></span>
                <span></span>
                <span></span> */}
                <button onClick={handleDelete} className="delete joke">Delete 🗑</button>
                {/* <button onClick={handleClick}></button> */}
            </li>
        </div>
    )
}

export default Joke;
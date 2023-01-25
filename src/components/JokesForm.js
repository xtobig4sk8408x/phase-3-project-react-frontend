import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function JokesForm() {
    const history = useHistory();

    const [newForm, setNewForm] = useState({
        joke: "",
        comment: "",
        rating: ""
        // blank: "",
        // blank: "",
        // blank: "",
        // blank: ""
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm)
        })
        .then(res => res.json())
        .then(newData => setJokes([...JokesForm, newData]))
        history.push("/")
    }
  return (
    <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
                <input value={newForm.joke} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.comment} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.rating} onChange={handleChange} type="" name="" placeholder="" /> <br />
                {/* <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br />
                <input value={newForm.} onChange={handleChange} type="" name="" placeholder="" /> <br /> */}
                <input value="Add Joke" type="submit" /> <br />
            </div>
        </form>
    </div>
  )
}

export default JokesForm;
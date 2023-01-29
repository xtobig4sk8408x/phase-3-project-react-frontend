import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom";
import Joke from './components/Joke';
import JokesForm from './components/JokesForm';
import JokesList from './components/JokesList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Comment from './components/Comment';
import SingleJoke from './components/SingleJoke';

function App() {
  const API="http://localhost:9393"

  const [jokes, setJokes] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(API + "/jokes")
    .then((res) => res.json())
    .then((data) => setJokes(data))
  }, []);

  const handleTrash = (someName) => {
    fetch(`${API}/jokes/${someName.id}`, {
      method: "DELETE"
    })
    const newJoke = jokes.filter(joke => joke.id !== someName.id) // ? listing : null)
    setJokes(newJoke)
  }

  // const filteredJokes= jokes.filter(joke1 => (
  //   joke1.comment.toLowerCase().includes(search.toLowerCase()) || 
  //   joke1.rating.toLowerCase().includes(search.toLowerCase()) ||
  //   joke1.joke.toLowerCase().includes(search.toLowerCase())
  //   ))

  return (
    <div className="App">
      <p>text in there</p>
      {/* <Login /> */}
      <NavBar jokes={jokes} setJokes={setJokes} API={API} />
      <Switch>
        <Route exact path="/jokes/new">
          <JokesForm jokes={jokes} setJokes={setJokes} API={API}/>
        </Route>
        <Route exact path="/jokes/:id">
          <SingleJoke API={API} setJokes={setJokes}/>
        </Route>
        <Route exact path="/">
          <Search search={search} setSearch={setSearch}/>
          <JokesList jokes={jokes} API={API} handleTrash={handleTrash} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
        <Route>
          <Login />
        </Route>
        <Route exact path="/jokes/comments">
          <Comment />
        </Route>
      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

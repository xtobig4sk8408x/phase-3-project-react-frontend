import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import {Route, Switch} from "react-router-dom";
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> dfd56f9904b05ebd47befd3c18e103f62254e181
import Joke from './components/Joke';
import JokesForm from './components/JokesForm';
import JokesList from './components/JokesList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Comment from './components/Comment';


<<<<<<< HEAD

const API="http://localhost:9292/"
=======
>>>>>>> dfd56f9904b05ebd47befd3c18e103f62254e181

function App() {
  const API="http://localhost:9292"

  const [jokes, setJokes] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
<<<<<<< HEAD
    fetch ("http://localhost:9292/")
=======
    fetch (API + "/jokes")
>>>>>>> dfd56f9904b05ebd47befd3c18e103f62254e181
    .then((res) => res.json())
    .then((data) => setJokes(data))
  }, []);
  return (
    <div className="App">
      <p>text in there</p>
      <Login />
      <NavBar jokes={jokes} setJokes={setJokes} API={API} />
      <Switch>
        <Route exact path="/jokes/new">
          <JokesForm jokes={jokes} setJokes={setJokes} API={API}/>
        </Route>
<<<<<<< HEAD
        <Route exact path="">
=======
        <Route exact path="/jokes/:id">
>>>>>>> dfd56f9904b05ebd47befd3c18e103f62254e181
          <Joke API={API}/>
        </Route>
        <Route exact path="/">
          <Search search={search} setSearch={setSearch}/>
          <JokesList jokes={jokes} API={API}/>
        </Route>
        <Route>
          <ErrorPage />
        </Route>
        <Route>
          <Login />
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

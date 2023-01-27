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



const API="http://localhost:9292/"

function App() {

  const [jokes, setJokes] = useState({})

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch ("http://localhost:9292/")
    .then((res) => res.json())
    .then((data) => setJokes(data))
  }, []);
  return (
    <div className="App">
      <p>text in there</p>
      <Login />
      <NavBar jokes={jokes} setJokes={setJokes} API={API} />
      <Switch>
        <Route exact path="">
          <JokesForm jokes={jokes} setJokes={setJokes} API={API}/>
        </Route>
        <Route exact path="">
          <Joke API={API}/>
        </Route>
        <Route exact path="">
          <Search search={search} setSearch={setSearch}/>
          <JokesList jokes={jokes}/>
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

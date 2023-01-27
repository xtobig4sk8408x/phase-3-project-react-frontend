import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Joke from './components/Joke';
import JokesForm from './components/JokesForm';
import JokesList from './components/JokesList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Comment from './components/Comment';



function App() {
  const API="http://localhost:9292"

  const [jokes, setJokes] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch (API + "/jokes")
    .then((res) => res.json())
    .then((data) => setJokes(data))
  }, []);
  return (
    <div className="App">
      <NavBar jokes={jokes} setJokes={setJokes} API={API} />
      <Switch>
        <Route exact path="/jokes/new">
          <JokesForm jokes={jokes} setJokes={setJokes} API={API}/>
        </Route>
        <Route exact path="/jokes/:id">
          <Joke API={API}/>
        </Route>
        <Route exact path="/">
          <Search search={search} setSearch={setSearch}/>
          <JokesList jokes={jokes} API={API}/>
        </Route>
        <Route>
          <ErrorPage />
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

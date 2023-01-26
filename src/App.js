import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const API=""

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
      <NavBar jokes={jokes} setJokes={setJokes} API={API} />
      <Switch>
        <Route exact path="/jokes">
          <JokesForm jokes={jokes} setJokes={setJokes} API={API}/>
        </Route>
        <Route exact path="">
          <Joke />
        </Route>
        <Route exact path="">
          <Search search={search} setSearch={setSearch}/>
          <JokesList jokes={jokes}/>
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

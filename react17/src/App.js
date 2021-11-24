import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Index () {
  return (<div>index</div>)
}

function About(){
  return(<div>about</div>)
}

function App({ basename }) {
  const garfishProps = (window.Garfish && window.Garfish.props) || {};
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <header className="App-header">
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
            Learn React 17
          </a>
          <p>store: {JSON.stringify(garfishProps.store)} total: {garfishProps.store && garfishProps.store.total}</p>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">about</Link></li>
          </ul>
          
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function clicked(){
    alert("New functionality coming soon");
}




function App() {
  return (
      <div
        class="bg_image"
      >
      <div class="center">Musick</div> 

      <div class="cbut"> 
        <button class="no" onClick={clicked}>
        Continue
        </button>
        </div>

      </div>
  );
=======
import React, { Component } from 'react'

// This is the component where everything loads 
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, react!</h1>
            </div>
        )
    }
>>>>>>> upstream/main
}

export default App
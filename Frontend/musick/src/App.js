import React, { Component } from 'react'
import './App.css';

function clicked(){
  alert("New functionality coming soon");
}

// This is the component where everything loads 
class App extends Component {
    render() {
        return (
            <div className="App">
              <h1>Hello, react!</h1>
              <div class="bg_image">
                <div class="center">Musick</div> 
              </div>
              <div class="cbut"> 
                <button class="no" onClick={clicked}> Continue</button>
              </div>
            </div>
        )
    }
}

export default App
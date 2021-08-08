import React, { Component } from 'react'

// This is the component where the whole app loads from or is based off 
class App extends Component {
    state = {

    }

    // This interacts with our GET Express API route,

    // This is where we do all of our API calls for the App component and state changes after the component renders
    componentDidMount() {
        fetch('/api/printFromBackend')
            .then(response => response)
            .then(response => console.log(response));
    }

    // This is where the HTML for the frontend goes
    render() { 
        return (
            <div className="App">
                <h1>Hello, react!</h1>
                
            </div>
        )
    }
}

export default App
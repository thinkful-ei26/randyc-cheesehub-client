import React, { Component } from 'react';
import logo from './logo.svg';
import CheeseList from './components/cheese-list';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      cheeses: [
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue"
    ]

    }

  }


  render() {
    return (
      <div className="App">
        hello cheeses
        <CheeseList cheeses = { this.state.cheeses }/>
      </div>
    );
  }
}

export default App;


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
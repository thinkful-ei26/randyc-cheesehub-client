import React, { Component } from 'react';
import logo from './logo.svg';
import CheeseList from './components/cheese-list';
import './App.css';
import { connect } from 'react-redux'
// import { cheeseReducer } from './reducers/cheese-reducer';
//actions
import { fetchCheeseRequest,fetchCheeseSuccess,fetchCheeseError } from './actions/cheese';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {

  //     cheeses: [
  //       "Bath Blue",
  //       "Barkham Blue",
  //       "Buxton Blue"
  //   ]

  //   }

  // }

  //<CheeseList cheeses = { this.state.cheeses }/>


componentDidMount(){

   this.props.dispatch(fetchCheeseRequest());

}


  render() {
    return (
      <div className="App">
        hello cheeses
        <CheeseList cheeses = { this.props.cheeses }/>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => {

  console.log('state', state);

  return {

    cheeses: state.cheeses

  }
 
}

export default connect(mapStateToProps)(App)
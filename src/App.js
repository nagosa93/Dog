import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
import './App.css';
import Main from './Main';



class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">

          <Main />
        </header>
      </div>);
  }
}


export default App;

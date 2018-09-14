import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from'./route'





class App extends Component {
  render() {
    // console.log(window.location)
    let {href} = window.location
    return (
      <div className="App">
        <Nav href={href}/>
        {routes}
      </div>
    );
  }
}

export default App;

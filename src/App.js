import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Post/>
      </div>
    );
  }
}

export default App;

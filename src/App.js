import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c = "v";
  render() {
    return (
      <div>
        {/* This is a Component {this.c} */}

        <Navbar/>
        <News pageSize ={5} country = 'in' category = 'sports'/>
      </div>
    )
  }
}

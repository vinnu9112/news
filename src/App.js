import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c = "v";
  pageSize = 5;
  render() {
    return (
      <div>
        {/* This is a Component {this.c} */}
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element ={<News key="home" pageSize ={this.pageSize} country = 'in' category = 'business'/>}></Route>
        <Route exact path="/sports" element ={<News key="sports" pageSize ={this.pageSize} country = 'in' category = 'sports'/>}></Route>
        <Route exact path="/business" element ={<News key="business" pageSize ={this.pageSize} country = 'in' category = 'business'/>}></Route>
        <Route exact path="/entertainment" element ={<News key="entertainment" pageSize ={this.pageSize} country = 'in' category = 'entertainment'/>}></Route>
        <Route exact path="/general" element ={<News key="general" pageSize ={this.pageSize} country = 'in' category = 'general'/>}></Route>
        <Route exact path="/health" element ={<News key="health" pageSize ={this.pageSize} country = 'in' category = 'health'/>}></Route>
        <Route exact path="/science" element ={<News key="science" pageSize ={this.pageSize} country = 'in' category = 'science'/>}></Route>
        <Route exact path="/technology" element ={<News  key="technology" pageSize ={this.pageSize} country = 'in' category = 'technology'/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

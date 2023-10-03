import NewsContainer from './Compnonets/NewsContainer'

import  { Component } from 'react'
import NavBar from './Compnonets/NavBar'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewsContainer  />
        
      </div>
    );
  }
}


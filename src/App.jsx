import NewsContainer from './Compnonets/NewsContainer'

import  { Component } from 'react'
import NavBar from './Compnonets/NavBar'

export default class App extends Component {
  render() {
    return (
      <div>
      
        <NavBar/>
        <NewsContainer/>
        
      </div>
    )
  }
}


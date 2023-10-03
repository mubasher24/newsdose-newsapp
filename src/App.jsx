
import NewsItem from './Compnonets/NewsItem';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import  { Component } from 'react'
import NavBar from './Compnonets/NavBar'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <NewsItem
                key="general"
                pageSize="5"
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsItem
                key='business'
                pageSize="5"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/science">
              <NewsItem
                key="science"
                pageSize="5"
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <NewsItem
                key="technology"
                pageSize="5"
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/sports">
              <NewsItem
                key="sports"
                pageSize="5"
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/health">
              <NewsItem
                key="health"
                pageSize="5"
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsItem
                key="entertainment"
                pageSize="5"
                country="in"
                category="entertainment"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


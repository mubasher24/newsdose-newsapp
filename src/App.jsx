import NewsItem from "./Compnonets/NewsItem";

import { Component } from "react";
import NavBar from "./Compnonets/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsItem pageSize="10" key="general" category="general" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsItem pageSize="10" key="business" category="business" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsItem pageSize="10" key="science" category="science" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsItem pageSize="10" key="technology" category="technology" />
              }
            />
            <Route
              exact
              path="/sports"
              element={<NewsItem pageSize="10" key="sports" category="sports" />}
            />
            <Route
              exact
              path="/health"
              element={<NewsItem pageSize="10" key="health" category="health" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsItem
                  pageSize="10"
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
           
          </Routes>
        </Router>
      </div>
    );
  }
}

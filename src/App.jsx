import NewsItem from "./Compnonets/NewsItem";

import { Component } from "react";
import NavBar from "./Compnonets/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Routes>
            <Route
              exact

              path="/"
              element={
                <NewsItem  setProgress={this.setProgress}  pageSize="10" key="general" category="general" />
              }
            />
            <Route
              exact

              path="/business"
              element={
                <NewsItem setProgress={this.setProgress}  pageSize="10" key="business" category="business" />
              }
            />
            <Route
              exact

              path="/science"
              element={
                <NewsItem setProgress={this.setProgress}  pageSize="10" key="science" category="science" />
              }
            />
            <Route
              exact

              path="/technology"
              element={
                <NewsItem setProgress={this.setProgress} 
                  pageSize="10"
                  key="technology"
                  category="technology"
                />
              }
            />
            <Route
              exact

              path="/sports"
              element={
                <NewsItem setProgress={this.setProgress}  pageSize="10" key="sports" category="sports" />
              }
            />
            <Route
              exact

              path="/health"
              element={
                <NewsItem setProgress={this.setProgress}  pageSize="10" key="health" category="health" />
              }
            />
            <Route
              exact

              path="/entertainment"
              element={
                <NewsItem setProgress={this.setProgress} 
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

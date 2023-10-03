import  { Component } from 'react'
import NewsItem from './NewsItem'

import { BrowserRouter as Router, Routes,  Route, } from "react-router-dom";

export class NewsContainer extends Component {

  

  render() {
    return (
      <div>
        <Router>
          <NewsItem
            pageSize="5"
            country="in"
            category="science"
            title="mytitle"
            descrption="mytitle"
            imageurl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N4U2H6HX3MY7IUSRYQKQCTFUDE_size-normalized.jpg&w=1440"
          />

          <Routes>
            <Route exact key={"science"} path="/science">
              <NewsItem pageSize="5" country="in" category="science" />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default NewsContainer

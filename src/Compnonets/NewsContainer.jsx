import  { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsContainer extends Component {

  

  render() {
    return (
      <div>
        <NewsItem
          title="mytitle"
          descrption="mytitle"
          imageurl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N4U2H6HX3MY7IUSRYQKQCTFUDE_size-normalized.jpg&w=1440"
        />
      </div>
    );
  }
}

export default NewsContainer

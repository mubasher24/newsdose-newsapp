import  { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

class NewsItem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    setProgress: PropTypes.func,
  };

  articles = [];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsDose`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=753897c1076343aa83986ca0b3fc6464&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=753897c1076343aa83986ca0b3fc6464&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      fetch(url)
        .then((data) => data.json())
        .then((parsedData) => {
          this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
          });
        });
    });
  };

  render() {
    return (
      <div>
        <div className="container px-5">
          <div className="row">
            <h1 className="my-5 pt-4 text-center text-capitalize">
              Newsdose- Top {this.props.category} Headlines
            </h1>
            <div className="col">
              {this.state.loading && <Spinner />}
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}>
                {!this.state.loading &&
                  this.state.articles.map((e) => {
                    return (
                      <div className="card mb-3 mt-3" key={e.url}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={e.urlToImage}
                              className="img-fluid w-fixed rounded-start"
                              alt="title"
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{e.title}</h5>
                              <p className="card-text">{e.description}</p>
                              <p className="card-text">
                                <small className="text-body-secondary">
                                  {e.publishedAt}
                                </small>
                              </p>
                              <a href={e.url} className="btn btn-secondary">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

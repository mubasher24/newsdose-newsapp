import { Component } from "react";
import { PropTypes } from "prop-types";
import Spinner from "./Spinner";

export class NewsItem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "general",
  };
  static propTypes = {
  
  pageSize: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=753897c1076343aa83986ca0b3fc6464&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNext = async () => {
    console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / `${this.props.pageSize}`)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=753897c1076343aa83986ca0b3fc6464&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrev = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=753897c1076343aa83986ca0b3fc6464&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
   

    return (
      <div>
        <div className="container px-5">
          <div className="row">
            <h1 className="my-5 text-center">Top Newsdose Headlines</h1>
            <div className="col">
              {this.state.loading && <Spinner />}
              {!this.state.loading &&
                this.state.articles.map((e) => {
                  return (
                    <div className="card mb-3 mt-3" key={e.url}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={e.urlToImage}
                            className="img-fluid rounded-start"
                            alt="title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.description}</p>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
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
            </div>
            <nav aria-label="...">
              <div className="pagination gap-5">
                <button
                  type="button"
                  disabled={this.state.page <= 1}
                  onClick={this.handlePrev}
                  className="btn btn-primary page-link">
                  &larr; Previous
                </button>

                <button
                  type="button"
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(
                      this.state.totalResults / `${this.props.pageSize}`
                    )
                  }
                  onClick={this.handleNext}
                  className="btn btn-primary page-link">
                  Next &rarr;
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;



import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("I am a constructor of news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2123eecdcde14cabae76ee3b50698dc9&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick =  async ()=>{
    console.log("prev");
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2123eecdcde14cabae76ee3b50698dc9&page=${this.state.page - 1}&pagesize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
  })
  }
  handleNextClick =  async ()=>{
    console.log("next");
    if(this.state.page+1 >Math.ceil(this.state.totalResults/20)){

    }

    else{
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2123eecdcde14cabae76ee3b50698dc9&page=${this.state.page + 1}&pagesize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
  })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title?element.title:" "}
              desc={element.description?element.description:" "}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>  
        })} {/*md-4 --> 4 cols i medium devices */}
        </div>
        
        <div className="container d-flex justify-content-between">
        <button disabled= {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("I am a constructor of news component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2123eecdcde14cabae76ee3b50698dc9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
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
      </div>
    );
  }
}

export default News;

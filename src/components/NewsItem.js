import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let { title, desc, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div>
          <div className="card my-3" style={{ width: "18rem" }}>
            <img
              src={!imageUrl?"https://images.livemint.com/img/2022/11/23/600x338/multibagger_stock_1669182937458_1669182937667_1669182937667.jpg":imageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div>
          <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>
              {source}
            </span>
            <img
              src={
                !imageUrl
                  ? "https://images.livemint.com/img/2022/11/23/600x338/multibagger_stock_1669182937458_1669182937667_1669182937667.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            
              <h5 className="card-title">
                {title}
                
              </h5>
              <p className="card-text">{desc}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}{" "}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark btn-primary"
              >
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

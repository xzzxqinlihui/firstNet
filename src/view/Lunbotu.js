import React, { Component } from 'react';
import "../sass/Lunbotu.scss";
export default class Lunbotu extends Component {
  render() {
    return (
      
        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active" />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src="http://gtd.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/https://img.alicdn.com/tfscom/TB1r.4eXSCWBuNjy0FhSuv6EVXa_600x600.jpg" alt="First slide" />
              <div className="carousel-caption">上海</div>
            </div>
            <div className="item">
              <img src="//gtd.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/https://img.alicdn.com/tfscom/TB1hqtoXKuSBuNjSsziSuvq8pXa_600x600.jpg" alt="Second slide" />
              <div className="carousel-caption">新加坡</div>
            </div>
            <div className="item">
              <img src="http://gtd.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i2/170060263390977302/TB24u.YtVXXXXXmXpXXXXXXXXXX_!!0-travel.jpg_600x600.jpg" alt="Third slide" />
              <div className="carousel-caption">上海科技馆</div>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
     
    );
  }
}

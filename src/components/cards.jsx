import React, { Component } from "react";
import './cards.css'


class Cards extends Component {
  constructor() {
    super();
    setTimeout(() => {
      this.styles = {
        fontSize: 40,
        color: "balck",
      };
      this.render();
    }, 3000);
  }
  state = {
    myText: "demo text",
    image: {
      url:
        "https://pixabay.com/get/g3a93ef01c034d09bffa25654f6230688b1e4e88d344ff12b9bbe6de17a7d4a1d79bbc7b921f27b1a267a8dfdaf3f0b61_640.jpg",
      alt: "Car Image",
    },
    thumb: "img-thumbnail",
    img: "img",
  };

  styles = {
    fontSize: 40,
    color: "red",
  };

  render() {
    return (
      <React.Fragment>
        <h3 style={this.styles}>My head line</h3>
        <p style={{ color: "blue", fontWeight: "bold" }}>{this.getText()}</p>
        <div className="className">
          {this.demoFunk()} {this.withConst()}
        </div>
                
        <img
          className={this.state.thumb}
          src={this.state.image.url}
          alt={this.state.image.alt}
        />
      </React.Fragment>
    );
  }

  getText() {
    const { myText } = this.state;
    return myText.length > 0 ? myText : "No text data";
  }
  demoFunk() {
    return <p>more para demo text article</p>;
  }

  withConst() {
    const el = <span>some value here</span>;
    return el;
  }
}
export default Cards;

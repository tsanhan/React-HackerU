import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  state = {};

  constructor(props){
    super(props);
    console.log("Card constructor hook invoke!, props:",props);
    
  }

  componentDidMount() {
    console.log("Card componentDidMount hook invoke!");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Card componentDidUpdate hook invoke! prevProps:",prevProps,"prevState:",prevState);

  }
  render() {
    console.log("Card render hook invoke!");

    const { card } = this.props;

    return (
      <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.article}</p>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// if type not right error message will be displays in console
Card.propTypes = {
  card: PropTypes.object,
};

export default Card;

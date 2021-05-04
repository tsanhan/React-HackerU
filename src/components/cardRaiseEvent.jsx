import React, { Component } from "react";

class CardRaiseEvent extends Component {
  state = {};

  buttonClass(cardId) {
    const { favs } = this.props;
    let classes = "btn btn-sm ";
    classes += favs.has(cardId) ? "btn-secondary" : "btn-primary";
    return classes;
  }

  render() {
    const { card, onHandleFavs } = this.props;
    return (
      <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.article}</p>
            {this.props.children}
            <span className="float-right">
              <button
                onClick={onHandleFavs} // lil challage: how will you pass argument to onHandleFavs? () => onHandleFavs(34)
                className={this.buttonClass(card.id)}
              >
                Bookmark
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CardRaiseEvent;

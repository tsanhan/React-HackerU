import React from "react";
import PropTypes from "prop-types";

const FavsTotal = props => {

  return (
    <div className="row">
      <div className="col-12">
          {/* if favs is array : favs.total*/}
        <p>Total cards in your bookmark: {props.favs.size}</p>
      </div>
    </div>
  );
};


// if type not right error message will be displays in console
FavsTotal.propTypes = {
  favs: PropTypes.object
};
export default FavsTotal;
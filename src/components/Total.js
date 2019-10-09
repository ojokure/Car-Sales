import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";

export const Total = ({ stock:{car, additionalPrice} }) => {
  console.log(car)
  return (
    <div className="content">
      car.features.length
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stock: state.stock,
  };
};
export default connect(
  mapStateToProps,
  actionCreators
)(Total);

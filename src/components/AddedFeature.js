import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";



export const AddedFeature = stock => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {stock.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};
export default connect(
  mapStateToProps,
  actionCreators
)(AddedFeature);
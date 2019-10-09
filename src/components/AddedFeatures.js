import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";

import AddedFeature from "./AddedFeature";

export const AddedFeatures = ({ stock:{car} }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
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
)(AddedFeatures);

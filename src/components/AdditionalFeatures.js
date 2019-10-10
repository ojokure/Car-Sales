import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";


import AdditionalFeature from './AdditionalFeature';

export const AdditionalFeatures = ({ stock:{store} }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
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
)(AdditionalFeatures);

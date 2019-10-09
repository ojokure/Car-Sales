import React from "react";
import { combineReducers, createStore } from "redux";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import * as actionCreators from "./actionCreators";

export const App = props => {
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const addFeature = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state : state
  }
}
export default connect(
  mapStateToProps,
  actionCreators
)(App);
